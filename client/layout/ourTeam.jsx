import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from 'client/components/styles/itemGrid_style.css';

import MainLayout from 'client/layout/main.jsx';
import ItemGrid from 'client/components/itemGrid.jsx';

export default class OurTeam extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			boss: {
				anhDaiDien:{
					url:''
				}
			}
		}
	}
	fetchOurTeamDataFromServer() {
		fetch('/api/our_team', {
			credentials: 'include',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
			}
		})
		.then((response) => response.json())
		.then((responseJson) => {
			var data = responseJson.filter(item => item.chucVu!=0);
			var boss = responseJson.find(item => item.chucVu==0);
			this.setState({data:data,boss:boss});
			console.log('url:',this.state.boss );
		})
	}
	componentWillMount() {
		this.fetchOurTeamDataFromServer();
	}
	render() {
		if (this.props.locale =="vi") {
			var name = this.state.boss.name;
			var description = this.state.boss.giaiThichTiengViet;
		}
		else {
			var name = this.state.boss.englishName;
			var description = this.state.boss.giaiThichTiengAnh;
		}
		return (
			<div>
				<div style={{display:'flex',justifyContent:'center'}}>
					<div style={{marginBottom:'10px'}}>
						<div className={styles.profile_item}
							style={{backgroundImage:'url('+this.state.boss.anhDaiDien.url+')'}}>
						</div>
						<div className={styles.profile_title}>
							{name}
						</div>
						<div className={styles.profile_description}>{description}</div>
					</div>
				</div>
				<ItemGrid locale={this.props.locale} item={"profile"} data={this.state.data}/>
			</div>
		)
	}
}
