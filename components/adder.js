import React from 'react';
import 'isomorphic-fetch';
import Nprogress from 'nprogress';

class Adder extends React.Component{
	constructor(props) {
		super(props);
		this.state = {eng:'',burmese:'',err:''};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onChangeHandler(e){
		this.setState({[e.target.name]:e.target.value});
	}

	onSubmitHandler(e){
		e.preventDefault();
		Nprogress.start();
		fetch('/api/word',{
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				burmese:this.state.burmese,
				english:this.state.eng
			})
		})
		.then(res=>{
			if(res.status !==200){
				throw new Error(res.statusText)
			} else {
				this.setState({eng:'',burmese:'',err:''});
				return res.json();
			}
		})
		.then(resData=>{
			Nprogress.done();
		})
		.catch(err=>{
			Nprogress.done();
			this.setState({err:err.message})
		})
	}

	render(){
		return (
		<div>
			<form onSubmit={this.onSubmitHandler}>
				<input name="eng" onChange={this.onChangeHandler} value={this.state.eng} placeholder="English" required/>
				<input name="burmese" onChange={this.onChangeHandler} value={this.state.burmese} placeholder="Burmese" required/>
				<input type="submit" value="Add"/>
			</form>
			<div className="err">{this.state.err}</div>
		</div>
		)
	}
}

export default Adder;
