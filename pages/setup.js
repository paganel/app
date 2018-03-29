import * as React from 'react'

import Page from '../components/Page'
import Lead from '../components/Lead'
import SetupForm from '../components/SetupForm'

export class IndexPage extends React.Component {
  render() {
    return (
      <Page>
        <Lead>initial user setup</Lead>
        <SetupForm />
      </Page>
    )
  }
}

export default IndexPage
