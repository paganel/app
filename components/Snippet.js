import * as React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const snippetTpl = `<!-- open form overlay -->
<script>
(function(i,s,o,g,r){i['OpenFormObj']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},a=s.createElement(o),m=s.getElementsByTagName(o)[0];
a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://%HOST%/static/overlay.min.js','ofo');
ofo('host','https://%HOST%')
</script>
<!-- end open form overlay -->`

export class Snippet extends React.Component {
  state = {
    show: false,
    copied: false,
  }

  componentDidMount() {
    this.setState({
      show: true,
      snippet: snippetTpl.replace(/%HOST%/g, document.location.host),
    })
  }

  flickerCopy = () => {
    this.setState({
      copied: false,
    })

    setTimeout(() => {
      this.setState({
        copied: true,
      })
    }, 50)
  }

  render() {
    return (
      <div>
        <CopyToClipboard text={this.state.snippet} onCopy={this.flickerCopy}>
          <div className="dib pos-rel">
            <button>click 2 copy</button>
            {this.state.copied && <span className="badge-dark">copied</span>}
          </div>
        </CopyToClipboard>

        <pre className="snippet">{this.state.show && this.state.snippet}</pre>
        <style jsx="">{`
          .snippet {
            background: white;
            color: #444;
            padding: 10px;
            border-radius: 3px;
            margin: 6px 0;
            overflow-x: auto;
            border: 1px solid #eee;
            font-family: monospace;
          }
        `}</style>
      </div>
    )
  }
}

export default Snippet
