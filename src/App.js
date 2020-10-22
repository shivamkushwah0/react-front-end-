import Main from './components/MainComponent';
import React , {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();

//console.log(store);

class App extends Component {

  

  render(){
        
      console.log(store);
  return (
      <Provider store = { store }>
        
        <BrowserRouter>
        <div>
        <Main/>
        </div>
      </BrowserRouter>
      </Provider>
      
  );
}
}
export default App;
