import React, { Component } from 'react'

import { getPopup } from '../lib/popup'

import './Demo.css'

export class Demo extends Component {
  constructor() {
    super()
    this.state = {
      hidden: false,
    }
    this.hidePopup = this.hidePopup.bind(this)
  }

  hidePopup(e) {
    this.setState({ hidden: true })
    e.preventDefault()
  }

  render() {
    const popup = getPopup()

    /**
     * Step 1: Render popup message in an overlay
     */
    console.log(popup)
    return (
      <div className="Demo">
        {!this.state.hidden ? (
          <div className="Overlay">
            <span className="PopupMessage">{popup.message}</span>
            <button onClick={this.hidePopup}>CLOSE</button>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}
