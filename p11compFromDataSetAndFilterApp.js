import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {items: []};
  }
  
  componentWillMount() {
    fetch('https://swapi.co/api/people/?format=json') //https works
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}));
  }
  
  filter(e){
    this.setState({filter: e.target.value})
  }
  
  //key fixes Each child in an array or iterator should have a unique "key" prop
  render(){
    let items = this.state.items;
    if(this.state.filter) {
      items = items.filter( item => 
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      );
    }
    return (
    <div>
      <input type="text" onChange={this.filter.bind(this)}/>
      {items.map(item =>
        <Person key={item.name} person={item} />)} 
    </div>  
    );
  }
}

const Person = (props) => <h4>{props.person.name}</h4>


export default App;