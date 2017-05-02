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
		<div className="search">
			<form onSubmit={this.onSubmitHandler}>
				<input type="text" name="eng" onChange={this.onChangeHandler} value={this.state.eng} placeholder="English" required/>
				<input type="text" name="burmese" onChange={this.onChangeHandler} value={this.state.burmese} placeholder="Burmese" required/>
				<input type="submit" value="Add"/>
			</form>
			<div className="err">{this.state.err}</div>
			<style jsx>{`
				div.search{
					width:60%;
					margin:1em auto;
				}
				div.err{
					font-size:1.7em;
					font-weight:bolder;
					border-left:.13em solid red;
					padding-left:.2em;
				}
				input[type=text]{
					resize:horizontal;
					width:100%;
					height:2em;
					padding:.2em;
					margin:1em auto;
					font-size:1.3em;
				}
				input[type=submit]{
					display: block;
			    width:100%;
			    height:2em;
			    margin:auto;
			    font-size:1.3em;
			    border-style:none;
			    border:0.2em solid #009688;
			    border-radius:2em;
			    background-color:#009688;
			    color:white;
			    font-weight:bolder;
				}
				div.err{
					font-size:1.7em;
					font-weight:bolder;
					border-left:.13em solid red;
					padding-left:.2em;
				}
			`}</style>
		</div>
		)
	}
}

export default Adder;
