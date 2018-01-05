// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', {className: "oldercoaster"}, 
      [
        React.createElement('p', {}, "Passengers:"),
        React.createElement('ul', {}, [
          React.createElement('li', {}, 'Agnes'),
          React.createElement('li', {}, 'Muriel')
        ])
      ]);
  }
};

export class InFrontOfYou extends React.Component {
    render() {
      return React.createElement('div', {}, [
        React.createElement('p', {}, "You shouldn't look too far").
        React.createElement('p', {}, "Sometimes, the solution is right in front of you")]);
    }
};

export class ButcherShop extends React.Component {
    render() {
      return React.createElement('div', {className: "butcher-shop"}, [
        React.createElement('p', {}, "Hello! We have the following products for sale today:"),
        React.createElement('ul', {}, [
          BUTCHER_PRODUCTS.map((butcher_product) =>
            <li>{butcher_product}</li>)])
        ]);
    }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
