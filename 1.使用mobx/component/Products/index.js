import React,{Component} from 'react';
import {observer,inject} from 'mobx-react'
import './index.scss';



@inject('productsStore','cartStore')
@observer
class Products extends Component {
  componentDidMount(){
    const {getAllProducts} = this.props.productsStore;
    getAllProducts()
  }

  handleClick(){

  }

  render(){
    const {productsStore,cartStore} = this.props;
    return (
      <div id="product">
        <h3>Products</h3>
        <ol>
        {productsStore.all.length?
          productsStore.all.map((item)=>{
            return (<li key={item.id}>
              <span>{item.title}-${item.price}*{item.quantity}</span>
              <button disabled={!item.quantity} onClick={()=>{cartStore.addToCart(item)}}>{item.quantity?'add to cart':'sold out'}</button>
              </li>)
          })
          :<li>商品加载中...</li>}
        </ol>
      </div>
    )
  }
}

export default Products;