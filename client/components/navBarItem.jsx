import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/navBar_style.css';


export default class NavBarItem extends React.Component {
	handleOnclick() {
		browserHistory.push(this.props.route);
	}
	render() {
		return (
			<div className={styles.nav_bar_item} onClick={()=>this.handleOnclick()}>
				{this.props.children}
			</div>
		)
	}
}
