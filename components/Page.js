import * as React from 'react'

import Footer from './Footer'

export class Page extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container full-height">
          <div className="fill">{this.props.children}</div>
          <Footer />
        </div>

        <style jsx="">{`
          .wrapper {
            min-height: 100vh;
            background: rgb(252, 251, 251);
            color: #444;
            padding: 0 1em;
          }

          .full-height {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }

          .fill {
            flex: 1;
          }
        `}</style>
      </div>
    )
  }
}

export default Page
