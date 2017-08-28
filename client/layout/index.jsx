import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import Carousel from 'nuka-carousel';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/index_style.css';

export default class IndexPage extends React.Component {
	render() {
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
						<div><img className={styles.carousel_img} src="/images/cover1.jpg" /></div>
						<div><img className={styles.carousel_img} src="/images/cover2.jpg" /></div>
						<img className={styles.carousel_img} src="/images/cover3.jpg" />
					</Carousel>
					<CoverMenu />

				</div>
			</div>
		)
	}
}

export class CoverMenu extends React.Component {
	render() {
		return (
			<div className={styles.cover_menu}>
				<div className={styles.item_container}>
					<CoverMenuItem url={'/project_category'}>Công trình</CoverMenuItem>
					<CoverMenuItem url={'/blog'}>Tin tức</CoverMenuItem>
					<CoverMenuItem>Giới thiệu</CoverMenuItem>
					<CoverMenuItem>Liên hệ</CoverMenuItem>
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
