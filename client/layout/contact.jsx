import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import MainLayout from 'client/layout/main.jsx';
import Iframe from 'react-iframe';

import globalStyles from 'client/styles/globalStyles.css';
import styles from 'client/layout/styles/main_style.css';

const vi = {
	contact: 'liên hệ',
    address: '189 Thanh Thuỷ, Quận Hải Châu, TP.Đà Nẵng'
}

const en = {
	contact: 'contact',
    address: '189 Thanh Thuy Hai Chau District, Da Nang City, Vietnam'
}

export default class ContactPage extends React.Component{
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
    render(){
        return (
            <MainLayout
                switchLang={this.props.switchLang}
                locale={this.props.locale}>
                <div style={{marginBottom:'20px'}} className={globalStyles.breadscrumb}>
                    <Link to="/contact">{this.state.lang.contact}</Link>
                </div>
                <div className={styles.map_container}>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6065474345946!2d108.21297485005432!3d16.085894388816005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183f7bf7432b%3A0x7f010bc27f2fb9f5!2sMAS+Architecture!5e0!3m2!1sen!2sus!4v1504512952096" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></Iframe>
                </div>
                <div className={styles.footer_container}>
    				<div className={styles.footer_right}>
                        <h1>M.SPACE Co.,ltd</h1>
    					<h1>MAS Architecture Workshop</h1>
    					<h2>{this.state.lang.address}</h2>
    					<div>T (+84) 0 236 3 863 885</div>
    					<div>F (+84) 0 236 3 863 885</div>
    					<div>M (+84) 0 905 007 550</div>
    					<div>E vanphongkientrucmas@gmail.com</div>
    				</div>
    			</div>
            </MainLayout>
        );
    }
}
