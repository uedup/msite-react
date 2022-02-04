import React, { Component } from 'react'
import store from '../../redux/store'

//定义UI组件
class Count extends Component {
	componentDidMount(){
		store.subscribe(()=>{
			this.setState({})
		});
	}
	//加法
	increment = ()=>{
		const {value} = this.selectNumber;
		store.dispatch({type:'increment',date:value*1})
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber;
		store.dispatch({type:'decrement',date:value*1})
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber;
		if(store.getState()%2){
			store.dispatch({type:'increment',date:value*1})
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber;
		setTimeout(()=>{
			store.dispatch({type:'increment',date:value*1})
		},200)
	}

	render() {
		//console.log('UI组件接收到的props是',this.props);
		return (
			<div>
				<h2>我是Count组件,下方组件总人数为:</h2>
				<h4>当前求和为：{store.getState()}</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

export default Count;