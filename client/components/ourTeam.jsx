import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import gridStyles from 'client/components/styles/itemGrid_style.css';
import styles from './styles/ourTeam_style.css';

import MainLayout from 'client/layout/main.jsx';
import ItemGrid from 'client/components/itemGrid.jsx';

import {cloudinaryModify} from 'client/script/utils.js'

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
			var description = this.state.boss.vaiTroTiengViet;
		}
		else {
			var name = this.state.boss.englishName;
			var description = this.state.boss.vaiTroTiengAnh;
		}
		var url = cloudinaryModify(this.state.boss.anhDaiDien.url,'w_512');
		var person = this.state.boss.key;
		return (
			<div className={styles.our_team_container}>
				<div className={styles.boss_container}>
				<Link to={"/ourteam/"+person}>
					<div>
						<div className={gridStyles.profile_item}
							style={{backgroundImage:'url('+url+')'}}>
						</div>
						<div className={gridStyles.profile_title}>
							{name}
						</div>
						<div className={gridStyles.profile_description}>{description}</div>
					</div>
				</Link>
				</div>
				<ItemGrid locale={this.props.locale} item={"profile"} data={this.state.data}/>
			</div>
		)
	}
}
