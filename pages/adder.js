import Body from '../components/body';
import AdderComponent from '../components/adder';
import React from 'react';

class Adder extends React.Component{
	render(){
		return (
		<Body>
			<AdderComponent></AdderComponent>
		</Body>
		)
	}
}

export default Adder;
