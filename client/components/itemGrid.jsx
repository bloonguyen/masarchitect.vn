import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import styles from './styles/itemGrid_style.css';

import {cloudinaryModify} from 'client/script/utils.js'

export default class ItemGrid extends React.Component {
	handleOnClick() {

	}
	_renderItem() {
		var nodeList;
		switch (this.props.item) {
			case "project":
				nodeList = this.props.data.map((item,index) => {
					var url = (item.hinhDaiDien)?cloudinaryModify(item.hinhDaiDien.url,'w_512'):null;
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

			case "profile":
				nodeList = this.props.data.map((item,index) => {
					var url = (item.anhDaiDien)? cloudinaryModify(item.anhDaiDien.url,'w_512'):null;
					if (this.props.locale =="vi") {
						var name = item.name;
						var description = item.giaiThichTiengViet;
					}
					else {
						var name = item.englishName;
						var description = item.giaiThichTiengAnh;
					}
					return (
						<li className={styles.item_container}
							key={index}>
								<div className={styles.profile_item}
									style={{backgroundImage:'url('+url+')'}}>
								</div>
								<div className={styles.profile_title}>
									{name}
								</div>
								<div className={styles.profile_description}>{description}</div>
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
