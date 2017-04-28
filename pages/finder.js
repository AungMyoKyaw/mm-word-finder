import Body from '../components/body';
import Search from '../components/search';
import React from 'react';

class Finder extends React.Component{
	render(){
		return (
		<Body title="google">
			<div>
				<Search></Search>
			</div>
		</Body>
		)
	}
}

export default Finder;
