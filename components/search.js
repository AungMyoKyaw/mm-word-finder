import React from 'react';
import Result from './searchResult';
import 'isomorphic-fetch';
import Nprogress from 'nprogress';

class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {searchText:'',data:[],err:''};
		this.search = this.search.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	search(e){
		e.preventDefault();
		let text = this.state.searchText;
		Nprogress.start();
		fetch(`api/word?word=${text}`)
			.then(res=>{
				if(res.status !==200){
					throw new Error(res.statusText)
				} else {
					return res.json();
				}
			})
			.then(resData=>{
				if(resData.length){
					this.setState({data:resData,err:''});
				} else {
					this.setState({data:[],err:'Not Found'});
				}
				Nprogress.done();
			})
			.catch(err=>{
				Nprogress.done();
				this.setState({err:err.message});
			})
	}

	handleChange(e){
		this.setState({searchText:e.target.value});

	}

	render(){
		return(
			<div>
				<form onSubmit={this.search}>
					<input onChange={this.handleChange} value={this.state.searchText} placeholder="Search" required/>
				</form>
				<Result results={this.state.data}></Result>
				<div className="err">{this.state.err}</div>
			</div>
		)
	}
}

export default Search;
