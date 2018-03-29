import * as React from 'react'
import axios from 'axios'
import Router from 'next/router'

import Spinner from './Spinner'
import Label from './Label'

export class LoginForm extends React.Component {
  state = {
    op: undefined,
    password: '',
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      this.submit()
    }
  }

  submit = () => {
    if (this.state.op === 'loading') {
      return
    }

    this.setState({
      op: 'loading',
    })

    axios
      .post('/api/login', { username: 'user', password: this.state.password })
      .then(() => {
        this.setState({
          op: 'done',
        })

        Router.push('/overview')
      })
      .catch(() => {
        this.setState({
          op: 'error',
        })
      })
  }

  password = event => {
    this.setState({
      password: event.target.value || '',
    })
  }

  render() {
    return (
      <div className="box">
        <Label>credentials:</Label>
        <div>
          <input
            type="password"
            placeholder="password"
            className="wide"
            value={this.state.password}
            onChange={this.password}
            onKeyPress={this.onEnter}
          />
        </div>

        {this.state.op === 'error' && <p className="error">Invalid password.</p>}

        <div className="mt-5">
          <input className="primary wide" type="submit" value="login" onClick={this.submit} />
          {this.state.op === 'loading' && <Spinner center />}
        </div>

        <style jsx="">{`
          .box {
            max-width: 200px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}

export default LoginForm
