import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import styles from './styles/itemGrid_style.css';


export default class ItemGrid extends React.Component {
	handleOnClick() {

	}
	_renderItem() {
		var nodeList;
		switch (this.props.item) {
			case "project":
				nodeList = this.props.data.map((item,index) => {
					var url = (item.hinhDaiDien)?item.hinhDaiDien.url:null;
					return (
						<li className={styles.item_container}
							key={index}>
							<Link to={"/project/"+item.key}>
								<div className={styles.project_item}
									style={{backgroundImage:'url('+url+')'}}>
								</div>
								<div
									className={styles.project_title}>
									{item.name}
								</div>
							</Link>
						</li>
					)
				})
				return nodeList;
			default:

		}
	}
	render() {
		return (
			<div className={styles.grid_wrapper}>
				<ul className={styles.grid}>
					{this._renderItem()}
				</ul>
			</div>
		)
	}
}
