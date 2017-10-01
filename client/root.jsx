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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locale:"vi"
        }
    }
    switchLang(locale) {
        console.log('lang params: ',locale);
        this.setState({locale:locale});
    }
    render() {
        return (
            <Router history={browserHistory}>

                <Route path="/" component={(props) => <IndexPage
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>}/>

                <Route path="/about" component={(props) => <AboutPage
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>}/>

                <Route path="/about/:type" component={(props) => <AboutPage
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>}/>

                <Route path="/ourteam/:key" component={(props) => <StaffCVPage
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>}/>

                <Route path="/blog" component={(props) => <BlogPage
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>}/>

                <Route path="/post/:key" component={(props) => <PostPage
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>}/>

                <Route path="/project_category/:name" component={(props) => <ProjectCategory
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>}/>

                <Route path="/project_category" component={(props) => <ProjectCategory
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>}/>

                <Route path="/project/:name" component={(props) => <ProjectPage
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>} />

                <Route path="/contact" component={(props) => <ContactPage
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>} />

            </Router>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app-body'));
