// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const para = React.createElement('p', {}, 'Two grannies having the time of their life!');
const para2 = React.createElement('p', {}, 'Passengers:');
const li1 = React.createElement('li', {}, 'Agnes');
const li2 = React.createElement('li', {}, 'Muriel');
const ul = React.createElement('ul', {}, [li1, li2]);
const oldercoaster = React.createElement('div', {className: 'oldercoaster'}, [para, para2, ul]);

const p3 = React.createElement('p', {}, 'You shouldn\'t look too far.');
const p4 = React.createElement('p', {}, 'Sometimes, the solution is right in front of you.');
const infront = React.createElement('div', {}, [p3,p4]);

const parab = React.createElement('p', {}, 'Hello! We have the following products for sale today:')
const list = React.createElement('ul', {}, BUTCHER_PRODUCTS.map((i) => <li>{i}</li>));
const butchershop =  React.createElement('div', {className: "butcher-shop"}, [parab, list]);

// Define these exported classes
export class OlderCoaster extends React.Component {
  render(){
    return oldercoaster;
  }
};
export class InFrontOfYou extends React.Component {
  render(){
    return infront;
  }
};
export class ButcherShop extends React.Component {
  render(){
    return butchershop;
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
