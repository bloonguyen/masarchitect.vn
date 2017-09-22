import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import Carousel from 'nuka-carousel';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/index_style.css';

import {cloudinaryModify} from 'client/script/utils.js'

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
			step:0,
			images:[]
		}
	}
	fetchSlidePhotoFromServer() {
		var portrait = window.matchMedia("(orientation: portrait)");
		var orientation = (portrait.matches)? 'portrait' : 'landscape';
		console.log('portrait: ',portrait);
		fetch('/api/slide/'+orientation, {
			credentials: 'include',
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log('fetch result: ',responseJson);
			this.setState({images:responseJson});
		});
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
		this.fetchSlidePhotoFromServer();
	}
	componentWillUnmount() {
		this.setState({lang:vi,
		step:0,
		images:[]})
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
		return (
			<div className={globalStyles.main_container}>
				<div className={styles.cover_container}>
					<SlideShow className={styles.slide_show} images={this.state.images} />
					{this._renderMenu()}
				</div>
			</div>
		)
	}
}

export class SlideShow extends React.Component {
	_renderListPhoto() {
		var size = (window.outerWidth > window.outerHeight)? window.outerWidth : window.outerHeight;
		var resizeParam = 'w_'+size.toString();
		var nodeList = this.props.images.map((item,index)=> {
			if (item.image.url) {
				// var url = cloudinaryModify(item.image.url,)
				console.log('index: ',index);
				if (index!==this.props.images.length-1) {
					return (<div>
						<img className={styles.carousel_img} src={item.image.url}/>
					</div>)
				}
				else {
					console.log('last item');
					return (
						<img className={styles.carousel_img} src={item.image.url}/>
				)
				}
			}
		})
		return nodeList;
	}
	render() {

		return (
				<Carousel
					dragging={false}
					edgeEasing={null}
					wrapAround={true}
					autoplay={true}
					autoplayInterval={7000}
					>
					{this._renderListPhoto()}
				</Carousel>
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
					<div style={{cursor:'pointer'}}
						onClick={(locale) => this.handleSwitchLanguage('vi')}
						className={styles.menu_item}>
							<h1 className={styles.item_label}>Tiếng Việt</h1>
					</div>
					<div style={{cursor:'pointer'}}
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
					<CoverMenuItem url={'/about'}>{this.props.lang.about}</CoverMenuItem>
					<CoverMenuItem url={'/contact'}>{this.props.lang.contact}</CoverMenuItem>
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
