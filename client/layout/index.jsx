import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import Carousel from 'nuka-carousel';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/index_style.css';

const vi = {
	project:"công trình",
	news: "tin tức",
	about: "giới thiệu",
	contact: "liên hệ"
}

const en = {
	project:"portfolio",
	news: "news",
	about: "about",
	contact: "contact"
}

export default class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lang:vi,
			step:0
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
	switchStep(val) {
		this.setState({step:val});
	}
	_renderMenu() {
		if (!this.state.step) {
			return (
				<LanguageMenu
					switchLang={this.props.switchLang}
					switchStep={this.switchStep.bind(this)} />
			)
		}
		else {
			return (
				<CoverMenu lang={this.state.lang} />
			)
		}
	}
	render() {
		console.log('locale: ',this.props.locale);
		return (
			<div className={globalStyles.main_container}>
				<div className={styles.cover_container}>
					<Carousel
						dragging={false}
						edgeEasing={null}
						wrapAround={true}
						autoplay={true}
						autoplayInterval={5000}
						>
						<div><img className={styles.carousel_img} src="/images/mas0.jpg" /></div>
						<div><img className={styles.carousel_img} src="/images/mas1.jpg" /></div>
						<div><img className={styles.carousel_img} src="/images/mas2.jpg" /></div>
						<img className={styles.carousel_img} src="/images/mas3.jpg" />
					</Carousel>
					{this._renderMenu()}
				</div>
			</div>
		)
	}
}

export class LanguageMenu extends React.Component {
	handleSwitchLanguage(locale) {
		this.props.switchLang(locale);
		this.props.switchStep(1);
	}
	render() {
		return (
			<div className={styles.cover_menu}>
				<div className={styles.item_container}>
					<div
						onClick={(locale) => this.handleSwitchLanguage('vi')}
						className={styles.menu_item}>
							<h1 className={styles.item_label}>Tiếng Việt</h1>
					</div>
					<div
						onClick={(locale) => this.handleSwitchLanguage('en')}
						className={styles.menu_item}>
							<h1 className={styles.item_label}>English</h1>
					</div>
				</div>
				<img className={styles.cover_logo} src="/images/logo/transparent_lightgrey.png" />
			</div>
		)
	}
}

export class CoverMenu extends React.Component {
	render() {
		return (
			<div className={styles.cover_menu}>
				<div className={styles.item_container}>
					<CoverMenuItem url={'/project_category'}>{this.props.lang.project}</CoverMenuItem>
					<CoverMenuItem url={'/blog'}>{this.props.lang.news}</CoverMenuItem>
					<CoverMenuItem>{this.props.lang.about}</CoverMenuItem>
					<CoverMenuItem>{this.props.lang.contact}</CoverMenuItem>
				</div>
				<img className={styles.cover_logo} src="/images/logo/transparent_lightgrey.png" />
			</div>
		)
	}
}

export class CoverMenuItem extends React.Component {
	render() {
		return (
			<Link style={{textDecoration:'none'}} to={this.props.url}>
				<div className={styles.menu_item}>
						<h1 className={styles.item_label}>{this.props.children}</h1>
				</div>
			</Link>
		)
	}
}
