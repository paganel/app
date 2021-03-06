import * as React from 'react'

const spinnerStyle = {
  display: 'inline-block',
  padding: '0 1em',
  verticalAlign: 'middle',
  lineHeight: '15px',
}

export const Spinner = ({ fill = '#444' }) => {
  return (
    <div style={spinnerStyle}>
      <svg id="openform-spinner" width="15" height="15" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke={fill}>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity="0.2" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18" />
          </g>
        </g>
      </svg>

      <style>{`
        svg#openform-spinner {
          vertical-align: middle;
          animation: openform-spinner-kf 1s infinite;
        }
        @keyframes openform-spinner-kf {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Spinner
