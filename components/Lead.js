import * as React from 'react'

export default ({ children }) => (
  <div className="lead">
    {children}

    <style jsx="">{`
      .lead {
        text-transform: uppercase;
        padding: 2.5em 1em 0.5em 0em;
        letter-spacing: 1px;
        font-size: small;
        border-bottom: 1px solid #dedede;
        font-weight: 600;
        color: #666;
        margin: 0 0 2em 0;
      }
    `}</style>
  </div>
)
