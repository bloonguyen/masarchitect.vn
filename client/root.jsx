import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import IndexPage from 'client/layout/index.jsx';
import BlogPage from 'client/layout/blog.jsx';
import ProjectPage from 'client/layout/project.jsx';
import ProjectCategory from 'client/layout/projectCategory.jsx';
import OurTeam from 'client/layout/ourTeam.jsx';

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

                <Route path="/blog" component={(props) => <BlogPage
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

                <Route path="/our_team" component={(props) => <OurTeam
                    locale={this.state.locale}
                    switchLang={this.switchLang.bind(this)} {...props}/>} />

            </Router>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app-body'));
