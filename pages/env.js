import * as React from 'react'

import Page from '../components/Page'
import Lead from '../components/Lead'

export class EnvPage extends React.Component {
  render() {
    return (
      <Page>
        <Lead>setup the database connection</Lead>
        <p>Your Heroku app needs one configuration, that is fairly easy to do. Follow these steps and you are good to go!</p>
        <h3>1</h3>
        <p>
          Go to <a href="https://dashboard.heroku.com/apps">https://dashboard.heroku.com/apps</a> and select your new instance. It will have
          a random name like "aqueous-meadow-17060 ".
        </p>

        <h3>2</h3>
        <p>Select the tab "Resources".</p>
        <img src="/static/select-resources.png" />

        <h3>3</h3>
        <p>
          Type "mlab" into the search box, select "mLab MongoDB" and in the following dialog box click the "PROVISION" button. The Add-on is
          free for the sandbox version and perfect to try things out. Your app will restart and you can refresh this page.
        </p>
        <img src="/static/use-mlab.png" />

        <style jsx>{`
          h3 {
            margin-top: 2em;
          }
        `}</style>
      </Page>
    )
  }
}

export default EnvPage
