import React from 'react';

class App extends React.Component {
  render(){
    return <Title text="123456"/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>;

Title.propTypes = { //this WORKS!!
  text(props, propName, component){
    if (!(propName in props)){
      return new Error('missing ${propName}')
    }
    if(props[propName].length<6) {
      return Error('${propName} was too short')
    }
  }
}

export default App;