import * as React from 'react'
import axios from 'axios'

import Spinner from './Spinner'
import Label from './Label'

export class LoginForm extends React.Component {
  state = {
    op: undefined,
    password1: '',
    password2: '',
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      this.submit()
    }
  }

  submit = () => {
    if (this.state.password1 !== this.state.password2 || !this.state.password2) {
      this.setState({
        op: 'error',
        err: 'The passwords must match.',
      })

      return
    }

    if (this.state.op === 'loading') {
      return
    }

    this.setState({
      op: 'loading',
    })

    axios
      .post('/api/initialSetup', { password: this.state.password2 })
      .then(() => {
        this.setState({
          op: 'done',
        })
        document.location.reload()
      })
      .catch(() => {
        this.setState({
          op: 'error',
          err: 'Something went wrong. Please try again..',
        })
      })
  }

  password1 = event => {
    this.setState({
      password1: event.target.value || '',
    })
  }

  password2 = event => {
    this.setState({
      password2: event.target.value || '',
    })
  }

  render() {
    return (
      <div>
        <p>
          In order to protect your dashboard page (and therefore your feedback data), you have to setup a password. No one is able to access
          this page again, when the setup is finished. After clicking "finish" you will be redirected to the login page.
        </p>

        <div className="box">
          <Label>credentials:</Label>
          <div>
            <input
              type="password"
              placeholder="password"
              className="wide"
              value={this.state.password1}
              onChange={this.password1}
              onKeyPress={this.onEnter}
            />
          </div>
          <div className="mt-1">
            <input
              type="password"
              placeholder="repeat password"
              className="wide"
              value={this.state.password2}
              onChange={this.password2}
              onKeyPress={this.onEnter}
            />
          </div>

          {this.state.op === 'error' && <p className="error">{this.state.err}</p>}

          <div className="mt-5">
            <input className="primary wide" type="submit" value="finish setup" onClick={this.submit} />
            {this.state.op === 'loading' && <Spinner center />}
          </div>

          <style jsx="">{`
            .box {
              margin: 0 auto;
              max-width: 200px;
            }
          `}</style>
        </div>
      </div>
    )
  }
}

export default LoginForm
