import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/project_style.css';

import MainLayout from 'client/layout/main.jsx';
import PhotoGrid from 'client/components/photoGrid.jsx';

const vi = {
	portfolio: 'công trình'
}

const en = {
	portfolio: 'portfolio'
}

export default class ProjectPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: undefined,
			projectName: '',
			category:{},
			lang:vi
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
			var category = (responseJson.theLoai[0])?responseJson.theLoai[0] :{};
			console.log('theloai: ',category);
			this.setState({
				project:responseJson,
				category:category,
				projectName:responseJson.name
			});
			console.log('fetch result: ',this.state.project);
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
		this.fetchProjectFromServer();
		switch (this.props.locale) {
			case 'en':
				this.setState({lang:en});
				break;
			default:
				this.setState({lang:vi});
		}
	}
	render() {
		console.log('state: ',this.state.category);
		var categoryLabel = (this.props.locale == 'vi')? this.state.category.name : this.state.category.tiengAnh;
		return(
			<MainLayout
				switchLang={this.props.switchLang}
				locale={this.props.locale}>
				<div style={{marginBottom:'10px'}} className={globalStyles.breadscrumb}>
					<Link to="/project_category">{this.state.lang.portfolio}</Link>
					<span style={{margin:'0 10px'}}> | </span>
					<Link to={"/project_category/"+this.state.category.key}>{categoryLabel}</Link>
					<span style={{margin:'0 10px'}}> | </span>
					<a>{this.state.projectName}</a>
				</div>
				<ProjectUnit locale={this.props.locale} data={this.state.project} />
			</MainLayout>
		)
	}
}

export class ProjectUnit extends React.Component {
	render() {
		if (this.props.locale =="en") {
			var description = this.props.data.giaiThichTiengAnh.split("\n").map(i => {
	            return <div>{i}</div>;
	        });
		}
		else {
			var description = this.props.data.giaiThichTiengViet.split("\n").map(i => {
	            return <div>{i}</div>;
	        });
		}
		console.log('giaithich: ',this.props.locale);

		var cols;
		var width = window.innerWidth;
			if (width<600) {
				cols = 2;
			}
			else {
				if (width>=600 && width<1000) {
					cols = 3;
				}
				else {
					cols = 4;
				}
			}
		console.log('width: ',width);
		return (
			<div>
				<div className={styles.cover_board}>
					<div className={styles.cover_photo} style={{backgroundImage:"url("+this.props.data.hinhDaiDien.url+")"}}></div>
				</div>
				<div className={styles.text_container}>
					<h1 className={styles.title}>{this.props.data.name}</h1>

					<div className={styles.description}>{description}</div>
				</div>
				<div className={styles.grid_container}>
				<div style={{maxWidth:'1200px'}}>
					<PhotoGrid photos={this.props.data.hinhAnhCongTrinh} cols={cols}/>
				</div>
				</div>
			</div>
		)
	}
}

// <div className={styles.date}>{this.props.data.ngayHoanThanh}</div>

ProjectUnit.defaultProps = {
	data: {
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
