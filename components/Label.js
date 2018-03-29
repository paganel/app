import * as React from 'react'

export const Label = ({ children, ...rest }) => (
  <label {...rest}>
    {children}
    <style jsx="">{`
      label {
        font-weight: bold;
        font-size: small;
        margin-right: 0.5em;
      }
    `}</style>
  </label>
)

export default Label
