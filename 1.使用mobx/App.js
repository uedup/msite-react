import React,{Component} from 'react';
import Cart from './component/Cart';
import Products from './component/Products';

class App extends Component {
    render(){
        return (
            <div id="header">
                <Products/>
                <Cart/>
            </div>
        )
    }
  }
  
  export default App;