import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/navBar_style.css';

export default class NavBar extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.nav_bar_container}>
					{this.props.children}
				</div>
			</div>
		)
	}
}
