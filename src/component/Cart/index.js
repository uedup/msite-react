import React, { Component } from 'react';
import {observer,inject} from "mobx-react";
import './index.scss'

@observer
@inject('cartStore')
export default class Header extends Component {
  
  render() {
    console.log(this.props.cartStore)
    return (<div id="header">
        <a href="http://www.jd.com" target="_blank" rel="noreferrer">...header</a> <br/>
        </div>);
  }
}
