import Head from 'next/head';
import Nprogress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = ()=>Nprogress.start();
Router.onRouteChangeComplete = ()=>Nprogress.done();
Router.onRouteChangeError = ()=>Nprogress.done();

const head = () =>(
	<div>
		<Head>
			<title>Burmese Word Finder</title>
	    <meta name="viewport" content="width=device-width, initial-scale=1" />
	    <meta charSet="utf-8" />
	    <link href="https://fonts.googleapis.com/css?family=Padauk" rel="stylesheet"/>
	  </Head>
	  <style jsx global>
	  {`
	  	body{
				margin:0;
			}
			 /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #ff9300;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: .3em;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #ff9300, 0 0 5px #ff9300;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
	  `}
	  </style>
  </div>
)

export default head;
