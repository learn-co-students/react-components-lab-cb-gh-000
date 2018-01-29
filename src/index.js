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
    var paraOne = React.createElement('p', {}, 'Two grannies having the time of their life!');
    var paraTwo = React.createElement('p', {}, 'Passangers:');
    var ulNames = React.createElement('ul', {},
      [
        React.createElement('li', {}, 'Anges'),
        React.createElement('li', {}, 'Muriel')
      ]
    );
    var older = React.createElement('div', {className: 'oldercoaster'}, [paraOne, paraTwo, ulNames]);
  }
}

export class InFrontOfYou extends React.Component {
  render() {
    var second = React.createElement('p', {}, 'You shouldn\'t look too far');
    var third = React.createElement('p', {}, 'Sometimes, the solution is right in front of you.');
    var first = React.createElement('div', {}, [second, third]);
  }
}

export class ButcherShop extends React.Component {
  render() {
    var greeting = React.createElement('p', {}, 'Hello! We have the following products for sale today:');
    var listItems = BUTCHER_PRODUCTS.map((item, index) =>
      React.createElement('li', {key: {index}}, item));
    var ulItems = React.createElemeny('ul', {}, [listItems]);
    var butcherShop = React.createElement('div', {className: 'butcher-shop'}, [greeting, ulItems]);
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
