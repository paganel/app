import * as React from 'react'
import cn from 'classnames'

import Form from './Form'
import Icon from './Icon'
import styles from './overlay.css'

const THREE_FRAMES = 17 * 3

export class Overlay extends React.Component {
  state = {
    hide: true,
    open: false,
  }

  togglOpen = cb => {
    this.setState(
      {
        open: !this.state.open,
      },
      cb,
    )
  }

  togglHide = cb => {
    this.setState(
      {
        hide: !this.state.hide,
      },
      cb,
    )
  }

  toggl = () => {
    if (this.state.hide) {
      this.togglHide(() => {
        setTimeout(this.togglOpen, THREE_FRAMES)
      })
    } else {
      this.togglOpen(() => {
        setTimeout(this.togglHide, THREE_FRAMES)
      })
    }
  }

  render() {
    return (
      <div className={styles.floating}>
        <div className={styles.bubble} onClick={this.toggl}>
          <Icon />
        </div>

        <div className={cn(styles.box, this.state.open ? styles.active : undefined, this.state.hide ? styles.hide : undefined)}>
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
