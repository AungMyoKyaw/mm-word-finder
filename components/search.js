import React from 'react';
import Result from './searchResult';

class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {searchText:'',data:[]};
		this.search = this.search.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	search(e){
		e.preventDefault()
		console.log(this.state.searchText)
		let test = {
			english:this.state.searchText,
			burmese:this.state.searchText
		}
		this.setState((prevState)=>{
			return (
				{
					data:[test]
				}
			)
		})
		console.log(this.state.data);
	}

	handleChange(e){
		this.setState({searchText:e.target.value});

	}

	render(){
		return(
			<div>
				<form onSubmit={this.search}>
					<input onChange={this.handleChange} value={this.state.searchText}/>
				</form>
				<Result results={this.state.data}></Result>
			</div>
		)
	}
}

export default Search;
