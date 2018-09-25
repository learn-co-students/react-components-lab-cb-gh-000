import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends Component {
  // this function should return the JSX we want the DOM to render
  render() {
    return (
      <div class="oldercoaster">
      <p>Two grannies having the time of their life!</p>
      <p>Passengers:</p>
      <ul>
        <li>Agnes</li>
        <li>Muriel</li>
      </ul>
    </div>
    )
  }

}

export class InFrontOfYou extends Component {
  // your code heret
  render() {
    return (
      <div>
      <p>You shouldn't look too far.</p>
      <p>Sometimes, the solution is right in front of you.</p>
    </div>
    )
  }
}


const product = [<li>{BUTCHER_PRODUCTS[0]}</li>, <li>{BUTCHER_PRODUCTS[1]}</li>, <li>{BUTCHER_PRODUCTS[2]}</li>, <li>{BUTCHER_PRODUCTS[3]}</li>]
export class ButcherShop extends Component {
  render() {
    return (
      <div class="butcher-shop">
      <p>Hello! We have the following products for sale today:</p>
      <ul>
        { product }
      </ul>
    </div>
    )
  }
}


export class App extends Component {
  render() {
    return (
      <div id="app">
        <OlderCoaster />
        <InFrontOfYou />
        <ButcherShop />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
