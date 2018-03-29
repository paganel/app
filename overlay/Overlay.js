import * as React from 'react'
import cn from 'classnames'

import Form from './Form'
import Icon from './Icon'
import styles from './overlay.css'

export class Overlay extends React.Component {
  state = {
    open: false,
  }

  toggl = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <div className={styles.floating}>
        <div className={styles.bubble} onClick={this.toggl}>
          <Icon />
        </div>

        <div className={cn(styles.box, this.state.open ? styles.active : undefined)}>
          <div className={styles.header} />
          <div className={styles.content}>
            <span onClick={this.toggl} className={styles.close}>
              ✖
            </span>
            <Form boxOpen={this.state.open} />
          </div>
        </div>
      </div>
    )
  }
}

export default Overlay
