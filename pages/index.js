import * as React from 'react'

import Page from '../components/Page'
import Lead from '../components/Lead'
import LoginForm from '../components/LoginForm'

export class IndexPage extends React.Component {
  render() {
    return (
      <Page>
        <Lead>login</Lead>
        <LoginForm />
      </Page>
    )
  }
}

export default IndexPage
