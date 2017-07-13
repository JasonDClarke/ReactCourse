import React from 'react';

//const App = () => <h1>Hi</h1>;

class App extends React.Component {
    constructor(){
      super(); // moves "this" from being React.Component to being App..?
      this.state = {
        txt: 'this is the state txt'
      }
    }
    update(e){ //this is not a special keyword, just a custom function, e for event
      this.setState({txt: e.target.value})
    } 
    
    render() {
        return (
          <div>
            <h1>{this.props.txt}</h1>
            <Widget update= {this.update.bind(this)} />
            <Widget update= {this.update.bind(this)} />
            <h2>{this.state.txt}</h2>
            <strong>Strong</strong>
          </div>
          );
    }
}
//##########
//##########

const Widget = (props) =>
  <input type="text" onChange={props.update} />

App.PropTypes = { //doesn't work, error: React.PropTypes is deprecated since React 15.5.0, use the npm module prop-types instead
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired 
}

App.defaultProps = {
  txt: "this is the default txt"
}

export default App;