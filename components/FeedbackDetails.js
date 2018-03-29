import * as React from 'react'
import Label from './Label'

export class FeedbackDetails extends React.Component {
  render() {
    return (
      <div className="box">
        <span className="value">
          <Label>created at:</Label>
          {this.props.createdAt}
        </span>
        <span className="value">
          <Label>href:</Label>
          <a target="_blank" href={this.props.href}>
            {this.props.href}
          </a>
        </span>

        <Label className="d-block label">feedback:</Label>
        <p className="text">{this.props.comment}</p>

        <style jsx="">{`
          .box {
            background: white;
            padding: 0.5em 1em;
          }
          .value {
            font-size: small;
            padding: 0 2em 0 0;
          }
          .text {
            padding: 0;
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default FeedbackDetails
