import logo from './logo.svg';
import './App.css';
import {React,Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LangBar from './LangBar';
import Words from './Words';


class App extends Component {

  constructor(){
    super();
    this.state={
      langs:[
        {id:1,code:'tr',name:'Türkçe'},
        {id:2,code:'en',name:'İngilizce'},
        {id:3,code:'fr',name:'Fransızca'},
        {id:4,code:'de',name:'Almanca'}
      ],
      words:[
        {id:1,word:'one',meaning:'bir',lngid:2},
        {id:2,word:'black',meaning:'siyah',lngid:2},
        {id:3,word:'siyah',meaning:'black',lngid:1},
        {id:4,word:'beyaz',meaning:'white',lngid:1},
        {id:5,word:'black',meaning:'dark',lngid:2},
        {id:6,word:'test',meaning:'test',lngid:3}
      ]

    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>header</div>
        </div>
        <div className='row'>
          <div className='col-md-2 leftMenu'><LangBar langs={this.state.langs} /></div>
          <div className='col-md-10'><Words words={this.state.words} /></div>
        </div>

      </div>
    );
  }
}

export default App;
