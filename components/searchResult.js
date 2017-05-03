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
							<style jsx>{`
								div{
									border-bottom:.1em solid #009688;
								}
								p{
									font-family: 'Padauk', sans-serif;
									font-size:1.3em;
								}
							`}</style>
						</div>
					)
				})}
			</div>
		)
	}
}

export default SearchResult;
