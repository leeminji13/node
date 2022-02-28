import React from 'react';
import './App.css';

class App extends React.Component{
  componentDidMount = async () =>{
    const res = await fetch('/user');
    const bodytext = await res.text();
    console.log(bodytext);
  }
  render(){
    return(
      <div className="App">
        리액트화면
      </div>
    );
  }
}

export default App;
