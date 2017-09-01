import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/main_style.css';

export default class MainLayout extends React.Component {
	render() {
		return (
			<div className={globalStyles.main_container}>
				<div>
					<HeaderBar />
					<div className={styles.main_content_body}>{this.props.children}</div>
				</div>
				<FooterBar />
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
		if (window.innerWidth < 750) {
			this.setState({mobileMode:true});
		}
		else { this.setState({mobileMode:false})}
	}
	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions.bind(this));
		console.log('update dimension');
		if (window.innerWidth < 750) {
			this.setState({mobileMode:true});
		}
		else { this.setState({mobileMode:false})}
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}
	handleDropDownNavBar() {
		this.setState({navBarDropDown:!this.state.navBarDropDown})
		console.log('navBarDropDown: ',this.state.navBarDropDown);
	}
	_renderNavBar() {
		if (!this.state.mobileMode) { //desktop view
			return (
					<HeaderBarItems mode={"desktop"} />
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
						<HeaderBarItems mode={"mobile"} />
					</div>
				)
			}

		}
	}
	render() {
		var height = (this.state.navBarDropDown)? '170px' : '60px';
		return (
			<div className={styles.header_container} style={{height:height}}>
				<Link style={{alignSelf:'flex-start',marginTop:'10px'}} to="/"><img className={styles.header_logo} src="/images/logo/transparent_grey.png" /></Link>
				{this._renderNavBar()}
			</div>
		)
	}
}

export class HeaderBarItems extends React.Component {
	render() {
		switch (this.props.mode) {
			case 'desktop':
				var container = styles.nav_bar_container;
				break;
			case 'mobile':
				var container = styles.expanded_container;
				break;
			default:
				var container = styles.expanded_container;
		}
		return(
			<ul className={container}>
				<li className={styles.nav_item}><Link to="/about">GIỚI THIỆU</Link></li>
				<li className={styles.nav_item}><Link to="/">CÔNG TRÌNH</Link></li>
				<li className={styles.nav_item}><Link to="/blog">TIN TỨC</Link></li>
				<li className={styles.nav_item}><Link to="/contact">LIÊN HỆ</Link></li>
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
					<h2>189 Thanh Thuy Hai Chau District,
					Da Nang City, Vietnam</h2>
					<div>T (+84) 0 236 3 863 885</div>
					<div>F (+84) 0 236 3 863 885</div>
					<div>M (+84) 0 905 007 550</div>
					<div>E vanphongkientrucmas@gmail.com</div>
				</div>
			</div>
		)
	}
}
