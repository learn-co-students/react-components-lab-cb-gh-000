import React from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return (
      <div className="oldercoaster">
        <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
        <ul>
          <li>Agnes</li>
          <li>Muriel</li>
        </ul>
      </div>    )
  }
}

export class InFrontOfYou extends React.Component {
  render() {
    return (
      <div>
        <p>You shouldn&#x27;t look too far.</p>
        <p>Sometimes, the solution is right in front of you.</p>
      </div>
    )
  }
}

export class ButcherShop extends React.Component {
  render () {
    return (
      <div className="butcher-shop">
  <p>Hello! We have the following products for sale today:</p>
  <ul>
    {BUTCHER_PRODUCTS.map((item) => <li>{item}</li>)}
  </ul>
</div>
    )
  }
}


export class App extends React.Component {
  render() {
    return (
      <div id="app">

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
