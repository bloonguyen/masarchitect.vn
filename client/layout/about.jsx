import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import MainLayout from 'client/layout/main.jsx';
import NavBar from 'client/components/navBar.jsx';
import NavBarItem from 'client/components/navBarItem.jsx';
import OurTeam from 'client/components/ourTeam.jsx';
import General from 'client/components/introduction.jsx';

import styles from './styles/about_style.css';

const vi = {
    intro: 'Giới thiệu',
    staff: 'Nhân sự',
    press: 'Truyền thông'
}

const en = {
    intro: 'Introduction',
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
                    <Press/>
                )
            default:
                return (
                    <General locale={this.props.locale}/>
                )

        }
    }
    render(){
        console.log("Param",this.props.params.type);
        return (
            <MainLayout locale={this.props.locale}>
            <NavBar>
                <NavBarItem route={'/about/general'}>{this.state.lang.intro}</NavBarItem>
                <NavBarItem route={'/about/staff'}>{this.state.lang.staff}</NavBarItem>
                <NavBarItem route={'/about/press'}>{this.state.lang.press}</NavBarItem>
            </NavBar>
            {this._renderAbout()}
            </MainLayout>
        );
    }
}


export class Press extends React.Component{
    render(){
        return (
            <div>press</div>
        );
    }
}
