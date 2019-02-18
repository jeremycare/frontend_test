import React, { Component } from 'react'

import { getPopup } from '../lib/popup'

import './Demo.css'

export class Demo extends Component {
  constructor() {
    super()
    this.state = {
      hidden: false,
    }
  }

  hidePopup() {
    this.setState({ hidden: false })
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
            <span>{popup.message}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}
