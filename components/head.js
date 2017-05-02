import Head from 'next/head';
import Nprogress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = ()=>Nprogress.start();
Router.onRouteChangeComplete = ()=>Nprogress.done();
Router.onRouteChangeError = ()=>Nprogress.done();

const head = () =>(
	<div>
		<Head>
	    <meta name="viewport" content="width=device-width, initial-scale=1" />
	    <meta charSet="utf-8" />
	  </Head>
	  <style jsx global>
	  {`
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
        height: .2em;
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
