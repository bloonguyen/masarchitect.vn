import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import MainLayout from 'client/layout/main.jsx';
import NavBar from 'client/components/navBar.jsx';
import NavBarItem from 'client/components/navBarItem.jsx';
import OurTeam from 'client/components/ourTeam.jsx';
import General from 'client/components/introduction.jsx';
import Press from 'client/components/press.jsx'
import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/about_style.css';
import blogStyles from './styles/blog_style.css';

const vi = {
    about: 'Hồ sơ',
    general: 'Giới thiệu',
    staff: 'Nhân sự',
    press: 'Truyền thông'
}

const en = {
    about: 'About',
    general: 'Introduction',
    staff: 'Our team',
    press: 'Press release'
}

export default class AboutPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lang:vi
        }
    }
    componentWillReceiveProps(nextProps) {
        switch (nextProps.locale) {
            case 'en':
                this.setState({lang:en});
                break;
            default:
                this.setState({lang:vi});
        }
    }
    componentWillMount() {
        switch (this.props.locale) {
            case 'en':
                this.setState({lang:en});
                break;
            default:
                this.setState({lang:vi});
        }
    }
    _renderAbout(){
        switch (this.props.params.type) {
            case 'general':
                return (
                    <General locale={this.props.locale}/>
                )
            case 'staff':
                return (
                    <OurTeam locale={this.props.locale}/>
                )
            case 'press':
                return (
                    <Press locale ={this.props.locale}/>
                )
            default:
                return (
                    <General locale={this.props.locale}/>
                )

        }
    }
    render(){
        console.log("Param",this.props.params.type);
        var categoryLabel = (this.props.params.type)? this.state.lang[this.props.params.type] : this.state.lang['general'];
        return (
            <MainLayout
                switchLang={this.props.switchLang}
                locale={this.props.locale}>
                <div style={{marginBottom:'10px'}} className={globalStyles.breadscrumb}>
                    <Link to="/about">{this.state.lang.about}</Link>
                    <span style={{margin:'0 10px'}}> | </span>
                    <Link to={"/about/"+this.props.params.type}>{categoryLabel}</Link>
                </div>
                <NavBar>
                    <NavBarItem route={'/about/general'}>{this.state.lang.general}</NavBarItem>
                    <NavBarItem route={'/about/staff'}>{this.state.lang.staff}</NavBarItem>
                    <NavBarItem route={'/about/press'}>{this.state.lang.press}</NavBarItem>
                </NavBar>
                {this._renderAbout()}
            </MainLayout>
        );
    }
}
