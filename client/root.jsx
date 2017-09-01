import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import IndexPage from 'client/layout/index.jsx';
import BlogPage from 'client/layout/blog.jsx';
import ProjectPage from 'client/layout/project.jsx';
import ProjectCategory from 'client/layout/projectCategory.jsx';
import AboutPage from 'client/layout/about.jsx';
import ContactPage from 'client/layout/contact.jsx'

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={IndexPage}/>
                <Route path="/blog" component={BlogPage} />
                <Route path="/project_category/:name" component={ProjectCategory}/>
                <Route path="/project_category" component={ProjectCategory}/>
                <Route path="/project/:name" component={ProjectPage} />
                <Route path="/about" component={AboutPage}/>
                <Route path="/about/:type" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app-body'));
