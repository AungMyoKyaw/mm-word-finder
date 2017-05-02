import Link from 'next/link';

const nav = ()=>(
	<div>
		<Link href="/">
			<a>Burma Word Finder</a>
		</Link>
		<Link prefetch href="/adder">
			<a style={{float:"right"}}>Add New Word</a>
		</Link>
		<style jsx>{`
			div{
				width:100%;
				background-color:#009688;
				height:3em;
			}
			a{
				display:inline-block;
				text-decoration:none;
				position:relative;
				top:50%;
				transform:translateY(-50%);
				font-size:1.3em;
				color:white;
				cursor:pointer;
				margin:0 .4em;
				font-weight:bolder;
				vertical-align:middle;
			}
		`}</style>
	</div>
)

export default nav;
