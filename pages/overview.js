import * as React from 'react'

import Page from '../components/Page'
import Snippet from '../components/Snippet'
import FeedbackTable, { loadData } from '../components/FeedbackTable'
import Lead from '../components/Lead'

export class OverviewPage extends React.Component {
  static async getInitialProps({ req }) {
    const feedback = await loadData({ req })

    return { feedback }
  }

  render() {
    return (
      <Page>
        <Lead>feedback overview</Lead>
        {this.props.feedback.length > 0 && <FeedbackTable data={this.props.feedback} />}
        {!this.props.feedback.length && (
          <p>
            <strong>There is no feedback yet.</strong> Please have a look at the site integration:
          </p>
        )}

        <Lead>site integration</Lead>
        <p>
          Copy the following snippet and paste it into the site that should contain the feedback form. It's like adding an analytics
          snippet:
        </p>
        <Snippet />
      </Page>
    )
  }
}

export default OverviewPage
