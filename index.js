const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);

const OlderCoaster=React.createClass({
  render(){
    return React.createElement('div',{className:'oldercoaster'},
  [
    React.createElement('p',{},'Two grannies having the time of their life!'),
    React.createElement('p',{},'Passengers:'),
    React.createElement('ul',{},
      React.createElement('li',{},'Agnes'),
      React.createElement('li',{},'Muriel')

  )
  ]);
  }
});

const InFrontOfYou= React.createClass({
  render(){
    return React.createElement('div',{},
[
  React.createElement('p',{},"You shouldn't look too far."),
  React.createElement('p',{},'Sometimes, the solution is <strong>right in front of you.')
]
)
}
});

const ButcherShop=React.createClass({
  render(){
    return React.createElement('div',{className:'butcher-shop'},[
    React.createElement('p',{},'Hello! We have the following products for sale today:'),
    React.createElement('ul',{},BUTCHER_PRODUCTS.map((butcher)=>{<li>{butcher}</li>}))
  ]);
});
