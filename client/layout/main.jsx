import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/main_style.css';

const vi = {
	project:"công trình",
	news: "tin tức",
	about: "giới thiệu",
	contact: "liên hệ",
	address: '189 Thanh Thuỷ, Quận Hải Châu, TP.Đà Nẵng'
}

const en = {
	project:"portfolio",
	news: "news",
	about: "about",
	contact: "contact",
	address: '189 Thanh Thuy Hai Chau District, Da Nang City, Vietnam'
}

const myWindow = (typeof window !== "undefined")? window : {};

export default class MainLayout extends React.Component {
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
	render() {
		return (
			<div className={globalStyles.main_container}>
				<div className={styles.semi_container}>
					<HeaderBar
						switchLang={this.props.switchLang}
						lang={this.state.lang}
						locale={this.props.locale} />
					<div className={styles.main_content_body}>{this.props.children}</div>
				</div>
			</div>
		)
	}
}

export class HeaderBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileMode: false,
			navBarDropDown: false
		}
	}
	updateDimensions() {
		console.log('update dimension');
		if (myWindow.innerWidth < 750) {
			this.setState({mobileMode:true});
		}
		else { this.setState({mobileMode:false})}
	}
	componentDidMount() {
		myWindow.addEventListener("resize", this.updateDimensions.bind(this));
		console.log('update dimension');
		if (myWindow.innerWidth < 750) {
			this.setState({mobileMode:true});
		}
		else { this.setState({mobileMode:false})}
	}
	componentWillUnmount() {
		myWindow.removeEventListener("resize", this.updateDimensions.bind(this));
	}
	handleDropDownNavBar() {
		this.setState({navBarDropDown:!this.state.navBarDropDown})
		console.log('navBarDropDown: ',this.state.navBarDropDown);
	}
	_renderNavBar() {
		if (!this.state.mobileMode) { //desktop view
			return (
					<HeaderBarDesktop
						switchLang={this.props.switchLang}
						locale={this.props.locale}
						mode={"desktop"}
						lang={this.props.lang}/>
			)
		}
		else {
			if (!this.state.navBarDropDown) { //mobile view collapsed
				return (
					<div onClick={()=>this.handleDropDownNavBar()} className={styles.menu_icon_container}>
						<img className={styles.menu_icon} src="/images/icon/menu_icon_black.png" />
					</div>
				)
			}
			else { //mobile view expanded
				return (
					<div className={styles.expanded_nav_bar}>
						<div onClick={()=>this.handleDropDownNavBar()} className={styles.menu_icon_container}>
							<img className={styles.menu_icon} src="/images/icon/menu_icon_black.png" />
						</div>
						<HeaderBarMobile
							mode={"mobile"}
							lang={this.props.lang}
							switchLang={this.props.switchLang}
							locale={this.props.locale}/>
					</div>
				)
			}

		}
	}
	render() {
		var height = (this.state.navBarDropDown)? '300px' : '60px';
		return (
			<div className={styles.header_container} style={{height:height}}>
				<Link style={{alignSelf:'flex-start',marginTop:'10px'}} to="/"><img className={styles.header_logo} src="/images/logo/transparent_grey.png" /></Link>
				{this._renderNavBar()}
			</div>
		)
	}
}



export class HeaderBarDesktop extends React.Component {
	switchLang() {
		if (this.props.locale == 'vi'){
			console.log('header bar items: ',this.props);
			this.props.switchLang('en')
		}
		else this.props.switchLang('vi');
	}
	render() {
		var localeLabel = (this.props.locale == 'vi')? 'english' : 'vietnamese';
		return (
			<ul className={styles.nav_bar_container}>
				<li className={styles.nav_item}><Link to="/project_category">{this.props.lang.project}</Link></li>
				<li className={styles.nav_item}><Link to="/blog">{this.props.lang.news}</Link></li>
				<li className={styles.nav_item}><Link to="/about">{this.props.lang.about}</Link></li>
				<li className={styles.nav_item}><Link to="/contact">{this.props.lang.contact}</Link></li>
				<li className={styles.nav_item}>
					<a onClick={()=>this.switchLang()}>{localeLabel}</a>
				</li>
				<li className={styles.nav_item}>
					<a href="https://www.instagram.com/mas.architecture/" target="_blank">
						<img style={{height:'20px',margin:'0 -5px'}} src="/images/icon/social_insta.png"/>
					</a>
				</li>
				<li className={styles.nav_item}>
					<a href="https://www.facebook.com/masarchitect/" target="_blank">
						<img style={{height:'20px',margin:'0 -5px'}} src="/images/icon/social_fb.png"/>
					</a>
				</li>
			</ul>
		)
	}
}


export class HeaderBarMobile extends React.Component {
	switchLang() {
		if (this.props.locale == 'vi'){
			console.log('header bar items: ',this.props);
			this.props.switchLang('en')
		}
		else this.props.switchLang('vi');
	}
	render() {
		var localeLabel = (this.props.locale == 'vi')? 'english' : 'vietnamese';
		return (
			<ul className={styles.expanded_container}>
				<li className={styles.nav_item}><Link to="/project_category">{this.props.lang.project}</Link></li>
				<li className={styles.nav_item}><Link to="/blog">{this.props.lang.news}</Link></li>
				<li className={styles.nav_item}><Link to="/about">{this.props.lang.about}</Link></li>
				<li className={styles.nav_item}><Link to="/contact">{this.props.lang.contact}</Link></li>
				<li style={{marginTop:'15px'}} className={styles.nav_item}><a href="https://www.instagram.com/mas.architecture/" target="_blank">Instagram</a></li>
				<li className={styles.nav_item}><a href="https://www.facebook.com/masarchitect/" target="_blank">Facebook</a></li>
				<li style={{marginTop:'15px'}} className={styles.nav_item}><a onClick={()=>this.switchLang()}>{localeLabel}</a></li>
			</ul>
		)
	}
}

export class FooterBar extends React.Component {
	render() {
		return (
			<div className={styles.footer_container}>
				<div className={styles.footer_right}>
					<h1>MAS Architecture Workshop</h1>
					<h2>{this.props.lang.address}</h2>
					<div>T (+84) 0 236 3 863 885</div>
					<div>F (+84) 0 236 3 863 885</div>
					<div>M (+84) 0 905 007 550</div>
					<div>E vanphongkientrucmas@gmail.com</div>
				</div>
			</div>
		)
	}
}
