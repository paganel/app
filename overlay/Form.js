import * as React from 'react'
import axios from 'axios'
import cn from 'classnames'

import styles from './form.css'
import Spinner from './Spinner'

const inputCache = {
  comment: '',
}

export class Form extends React.Component {
  state = {
    // "loading" | "error" | "done"
    op: undefined,
    err: undefined,
    comment: inputCache.comment,
    rating: 5,
  }

  componentWillReceiveProps(props, newProps) {
    if (!newProps.boxOpen) {
      setTimeout(() => {
        this.setState({
          op: undefined,
        })
      }, 500)
    }
  }

  textChange = event => {
    inputCache.comment = event.target.value || ''
    this.setState({
      comment: inputCache.comment,
    })
  }

  rate = rating => {
    this.setState({
      rating,
    })
  }

  submit = () => {
    const payload = {
      rating: this.state.rating,
      comment: this.state.comment,
      href: document.location.href,
    }

    this.setState({ op: 'loading' })

    // set via the script snippet
    const host = ofo.q[0][1]

    Promise.all([new Promise(resolve => setTimeout(() => resolve(), 1000)), axios.post(host + '/api/feedback', payload)])
      .then(([_, response]) => {
        this.setState({ op: 'done' })
      })
      .catch(err => {
        this.setState({ op: 'error', err })
      })
  }

  render() {
    if (this.state.op === 'done') {
      return <p className={styles.done}>Thank you! We really appreciate that. 👏</p>
    }

    return (
      <div className={styles.box}>
        <label className={styles.label}>Overall experience:</label>

        <div className={styles.buttonBox}>
          <button
            type="button"
            onClick={() => this.rate(5)}
            className={cn(styles.button, this.state.rating === 5 ? styles.buttonActive : undefined)}>
            👍 Good!
          </button>
          <button
            type="button"
            onClick={() => this.rate(1)}
            className={cn(styles.button, styles.buttonSpace, this.state.rating === 1 ? styles.buttonActive : undefined)}>
            👎 Bad, I'm unsatisfied..
          </button>
        </div>

        <label className={styles.label}>Questions / comments / anything:</label>
        <span className={styles.optional}>(optional)</span>
        <textarea value={this.state.comment} onChange={this.textChange} className={styles.text} />

        <div className={styles.send}>
          {this.state.op === 'loading' && <Spinner />}
          <button type="button" onClick={this.submit} className={cn(styles.button, styles.sendButton)}>
            Send
          </button>
        </div>

        {this.state.op === 'error' && <p className={styles.error}>An error occured. Please try again later.</p>}

        <p className={styles.infoText}>
          This <a href="https://github.com">feedback form</a> is hosted by the website owner – no third party involved.
        </p>
      </div>
    )
  }
}

export default Form
