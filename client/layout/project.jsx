import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/project_style.css';

import MainLayout from 'client/layout/main.jsx';
import PhotoGrid from 'client/components/photoGrid.jsx';

export default class ProjectPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {}
		}
	}
	fetchProjectFromServer() {
		var apiLink = '/api/project/'+this.props.params.name;
		fetch(apiLink, {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({project:responseJson});
			console.log('fetch result: ',this.state.project);
		});
	}
	componentWillMount() {
		this.fetchProjectFromServer();
	}
	render() {
		return(
			<MainLayout locale={this.props.locale}>
				<ProjectUnit data={this.state.project[0]} />
			</MainLayout>
		)
	}
}

export class ProjectUnit extends React.Component {
	render() {

		var description = this.props.data.giaiThichTiengViet.split("\n").map(i => {
            return <div>{i}</div>;
        });
		var cols = (window.innerWidth>900)? 3 : 2;
		return (
			<div style ={{textAlign:"center"}}>
				<div className={styles.cover_board}>
					<div className={styles.cover_photo} style={{backgroundImage:"url("+this.props.data.hinhDaiDien.url+")"}}></div>
				</div>
				<h1 className={styles.title}>{this.props.data.name}</h1>
				<div className={styles.date}>{this.props.data.ngayHoanThanh}</div>
				<div className={styles.description}>{description}</div>
				<div className={styles.grid_container}></div>
				<PhotoGrid photos={this.props.data.hinhAnhCongTrinh} cols={cols}/>
			</div>
		)
	}
}

ProjectUnit.defaultProps =
	{data: {
		giaiThichTiengAnh: "",
		giaiThichTiengViet: "",
		hinhAnhCongTrinh: [],
		hinhDaiDien: {
			secure_url: "",
			url: ""
		},
		key: "",
		name: "",
		ngayHoanThanh: "",
		publishedDate: "",
		theLoai: []
		}
	}
