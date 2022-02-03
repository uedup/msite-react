import React,{Component} from 'react';
import {observer,inject} from 'mobx-react'
import './index.scss';


@observer
@inject('productsStore')
class Products extends Component {
  componentDidMount(){
    const {getAllProducts} = this.props.productsStore;
    getAllProducts()
  }

  render(){
    // console.log(this.props)
    const {all} = this.props.productsStore;
    console.log(all)
    return (
      <div id="product">
        {all.map((item)=>{
          return <li>{item.title}</li>
        })}
      </div>
    )
  }
}

export default Products;