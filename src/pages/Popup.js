import React, { Component } from 'react'

import { updatePopup } from '../lib/popup'
import './Popup.css'

export class Popup extends Component {
  /**
   * Step 3: Render a form and everything needed to be able to edit the popup
   */
  constructor() {
    super()
    this.state = {
      message: '',
      sending: false,
    }
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeMessage(e) {
    this.setState({
      message: e.target.value,
    })
  }

  async handleSubmit(e) {
    this.setState({
      sending: true,
    })
    await updatePopup(this.state.message)
    this.setState({
      sending: false,
    })
  }

  render() {
    return (
      <div>
        <span>New Popup Message :</span>
        <input
          value={this.state.message}
          placeholder="Popup Message"
          onChange={this.handleChangeMessage}
        />
        <button onClick={this.handleSubmit} disabled={this.state.sending}>
          Sumbit
        </button>
      </div>
    )
  }
}
