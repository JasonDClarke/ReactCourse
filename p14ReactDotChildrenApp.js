import React from 'react';

class App extends React.Component {
  render(){
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    );
  }
}

class Parent extends React.Component {
  render() {
    let items = React.Children
    .map(this.props.children, child => child);
    console.log(items);
    // let items = React.Children.toArray(this.props.children)
    // let items = React.Children.only(this.props.children)
    return null;
  }
}

export default App;