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

module.exports = (

		<Route path="/" component={(props) => <IndexPage/>}>

			<Route path="/about" component={(props) => <AboutPage/>}/>

			<Route path="/about/:type" component={(props) => <AboutPage/>}/>

			<Route path="/ourteam/:key" component={(props) => <StaffCVPage/>}/>

			<Route path="/blog" component={(props) => <BlogPage/>}/>

			<Route path="/post/:key" component={(props) => <PostPage/>}/>

			<Route path="/project_category/:name" component={(props) => <ProjectCategory/>}/>

			<Route path="/project_category" component={(props) => <ProjectCategory/>}/>

			<Route path="/project/:name" component={(props) => <ProjectPage/>} />

			<Route path="/contact" component={(props) => <ContactPage/>} />
		</Route>
)
