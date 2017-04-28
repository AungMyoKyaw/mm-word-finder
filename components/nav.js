import Link from 'next/link';

const nav = ()=>(
	<div>
		<Link href="/">
			<a>Burma Word Finder</a>
		</Link>
		<Link prefetch href="/adder">
			<a>Add New Word</a>
		</Link>
	</div>
)

export default nav;
