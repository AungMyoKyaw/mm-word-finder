import React from 'react';

class SearchResult extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				{this.props.results.map((result,index)=>{
					return (
						<div key={index}>
							<p>{result.english}</p>
							<p>{result.burmese}</p>
						</div>
					)
				})}
			</div>
		)
	}
}

export default SearchResult;
