import React,{Component} from 'react';
import {observer,inject} from 'mobx-react'
import './index.scss';


@observer
@inject('productsStore')
class Products extends Component {
  render(){
    console.log(this.props)
    return (
      <div id="product">
        <h2>Products</h2>
      </div>
    )
  }
}

export default Products;