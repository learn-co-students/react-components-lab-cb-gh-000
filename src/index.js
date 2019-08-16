import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

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
      <div className="oldercoaster">
        <p>"Two grannies having the time of their life!"</p>
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
  //
  render() {
    return (
      <div>
        <p>"You shouldn't  look too far."</p>
        <p>"Sometimes, the solution is right in front of you."</p>
      </div>
    )
  }
}

export class ButcherShop extends Component {
  // your code here
  render(){
    return (
  <div className="butcher-shop">
  <p>"Hello! We have the following products for sale today:"</p>
  <ul>
    <li>"Tenderloin"</li>
    <li>"Short ribs"</li>
    <li>"Beef shin"</li>
    <li>"Ribeye"</li>
  </ul>
</div>
)
}
}


export class App extends Component {
  render() {
    return (
      <div className="butcher-shop">
  <p>"Hello! We have the following products for sale today:"</p>
  <ul>
    <li>"Tenderloin"</li>
    <li>"Short ribs"</li>
    <li>"Beef shin"</li>
    <li>"Ribeye"</li>
  </ul>
</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
