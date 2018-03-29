import * as React from 'react'
import ReactDOM from 'react-dom'

import Overlay from './Overlay'

const container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(<Overlay />, container)
