import React, { Component } from 'react';
import {observer,inject} from 'mobx-react'
import './index.scss'

@observer
@inject('cartStore')
class Cart extends Component {
  render() {
    console.log(this.props)
    return (<div id="header">
        <a href="http://www.jd.com" target="_blank" rel="noreferrer">...Cart</a> <br/>
        </div>);
  }
}
export default Cart;