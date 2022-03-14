import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      textdb:[]
    }
    //const textdb=[]로 바깥쪽에 선언하면 한번밖에 안돈다
  }
  componentDidMount = async () =>{
    const res = await fetch('/mylink/myport');
    const bodytext = await res.json();//bodytext는 object라고 선언(json)
    const navitext = JSON.parse(bodytext.navidb);
    //JSON.parse, eval
    //JSON.parse(데이터타입이 text); []array로 인식, {}object로 인식
    console.log(typeof navitext.length);//array로 인식했는지 확인
    this.setState({
      //반드시 이 함수안에서 연동해야 한다.
      //다시 state값이 변경되었으므로
      //재랜더링해야 변경값이 적용된 화면이 보이겠지
      textdb: navitext
    })
    console.log(bodytext);
  }
  render(){
    console.log(typeof this.state.textdb)
    return(
      <div className="App">
        <ul>
        {this.state.textdb.map((item)=>{
          return(
            <li><NavLink to={item[1]}>{item[0]}</NavLink></li>
          )
        })
        }
        </ul>
      </div>
    );
  }
}

export default App;

