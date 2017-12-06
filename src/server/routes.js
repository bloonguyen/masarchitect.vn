import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import IndexPage from 'client/layout/index.jsx';
import BlogPage from 'client/layout/blog.jsx';
import ProjectPage from 'client/layout/project.jsx';
import ProjectCategory from 'client/layout/projectCategory.jsx';
import AboutPage from 'client/layout/about.jsx';
import ContactPage from 'client/layout/contact.jsx'
import PostPage from 'client/layout/post.jsx';
import StaffCVPage from 'client/layout/staffCV.jsx'

exports = module.exports = (
		<Router history={browserHistory}>

			<Route path="/" component={IndexPage}/>

			<Route path="/about" component={AboutPage}/>

			<Route path="/about/:type" component={AboutPage}/>

			<Route path="/ourteam/:key" component={StaffCVPage}/>

			<Route path="/blog" component={BlogPage}/>

			<Route path="/post/:key" component={PostPage}/>

			<Route path="/project_category/:name" component={ProjectCategory}/>

			<Route path="/project_category" component={ProjectCategory}/>

			<Route path="/project/:name" component={ProjectPage} />

			<Route path="/contact" component={ContactPage} />

		</Router>
)
