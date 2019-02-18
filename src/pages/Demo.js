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
    this.valideSpecsPopup = this.valideSpecsPopup.bind(this)
  }

  async componentDidMount() {
    const popup = await getPopup()
    this.setState({ popup: popup })
    this.valideSpecsPopup()
  }

  hidePopup(e) {
    this.setState({ hidden: true })
  }

  valideSpecsPopup() {
    let valid = true

    // check mobile
    valid =
      valid &&
      (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i))
    // check language
    const enLanguages = [
      'en',
      'en-US',
      'en-EG',
      'en-AU',
      'en-GB',
      'en-CA',
      'en-NZ',
      'en-IE',
      'en-ZA',
      'en-JM',
      'en-BZ',
      'en-TT',
    ]
    valid = valid && navigator.languages.some(x => enLanguages.indexOf(x) >= 0)

    // i runned out of time.. First visit, i planned to use a cookie

    // User is in france, ping an API or use navigator.

    return valid
  }

  render() {
    /**
     * Step 1: Render popup message in an overlay
     */
    const valid = this.valideSpecsPopup()
    return (
      <div className="Demo" onClick={this.printer}>
        {!this.state.hidden && valid ? (
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
