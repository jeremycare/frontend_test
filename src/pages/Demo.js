import React, { Component } from 'react'

import { getPopup } from '../lib/popup'
import 'babel-polyfill'

import './Demo.css'

export class Demo extends Component {
  constructor() {
    super()
    this.state = {
      hidden: false,
      popup: null,
    }
    this.hidePopup = this.hidePopup.bind(this)
  }

  async componentDidMount() {
    const popup = await getPopup()
    this.setState({ popup: popup })
  }

  hidePopup(e) {
    this.setState({ hidden: true })
    e.preventDefault()
  }

  render() {
    /**
     * Step 1: Render popup message in an overlay
     */
    return (
      <div className="Demo" onClick={this.printer}>
        {!this.state.hidden ? (
          <div className="Overlay">
            <span className="PopupMessage">
              {this.state.popup ? this.state.popup.message : ''}
            </span>
            <button onClick={this.hidePopup}>CLOSE</button>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}
