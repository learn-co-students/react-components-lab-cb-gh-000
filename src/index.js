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
     return React.createElement('div', { className: 'oldercoaster' }, [
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Agnes'),
        React.createElement('li', {}, 'Muriel'),
      ]),
    ]);
   }

}

export class InFrontOfYou extends Component {
render(){
  return React.createElement('div', {}, [
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, [
        'Sometimes, the solution is right in front of you.']),
    ]);
}
}

export class ButcherShop extends Component {

  render(){

    return React.createElement('div', { className: 'butcher-shop' }, [
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', {},
        BUTCHER_PRODUCTS.map(product => React.createElement('li', {}, product))
      )
    ]);
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
