import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount = async () =>{
    const res = await fetch('/mylink/myport');
    const bodytext = await res.text();
    this.setState({
      textdb: bodytext
    })
    console.log(bodytext);
  }
  render(){
    return(
      <div className="App">
        {this.state.textdb}
      </div>
    );
  }
}

export default App;
