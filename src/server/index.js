import React from 'react';
import ReactDOMServer from 'react-dom/server';
import templateFn from './template';
import { match, RouterContext } from 'react-router';
import routes from './routes';

exports = module.exports = function (req, res){
	// match the routes to the url
    match({ routes: routes.props.children, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is what the `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
	console.log('routes ====>',routes);
	console.log('location ===>',req.url);
	console.log('props ====>',props);
    const html = ReactDOMServer.renderToString(<RouterContext {...props}/>)
    const template = templateFn(html);
    res.send(template);
});
}
