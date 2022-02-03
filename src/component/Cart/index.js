import React, { Component } from 'react';
import {observer,inject} from 'mobx-react'
import './index.scss'

@inject('cartStore')
@observer
class Cart extends Component {
  render() {
    // console.log(this.props)
    const {cartStore} = this.props;

    return (<div id="cart">
        <h3>Your Cart</h3>
        <ol>
          {cartStore.cartsItem.map((item)=>{
            return (<li key={item.id}>{item.title}-{item.quantity}*{item.price}</li>)
          })}
        </ol>
        <div>总价：{cartStore.totalPrice}</div>
        <button 
          disabled={!cartStore.cartsItem.length} 
          onClick={()=>{cartStore.checkout(cartStore.items)}}>checkout</button>
        {cartStore.status&&<div>checkout {cartStore.status}</div>}
      </div>);
  }
}
export default Cart;