import Head from './head';
import Nav from './nav';

const body = (props)=>(
	<div>
		<Head/>
		<Nav/>
		{props.children}
	</div>
)

export default body;
