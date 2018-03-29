import * as React from 'react'

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <strong>open form.</strong>
          <p>is an open source, self hosted feedback gathering tool.</p>
        </div>
        <div>
          <strong>Links</strong>
          <a href="">Github repository</a>
        </div>

        <style jsx="">{`
          footer {
            display: flex;
            padding: 2em 0;
          }

          strong {
            display: block;
            padding: 0 0 0.5em 0;
          }

          p {
            max-width: 200px;
            margin: 0;
            color: #ccc;
          }

          div {
            margin: 0 4em 0 0;
          }

          div > a {
            display: block;
          }

          p,
          a {
            font-size: small;
          }

          p a {
            color: #ccc;
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer
