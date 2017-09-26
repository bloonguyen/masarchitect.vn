import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/project_style.css';

import MainLayout from 'client/layout/main.jsx';
import NavBar from 'client/components/navBar.jsx';
import NavBarItem from 'client/components/navBarItem.jsx';
import ItemGrid from 'client/components/itemGrid.jsx';

const vi = {
	portfolio: 'công trình'
}

const en = {
	portfolio: 'portfolio'
}

export default class ProjectCategory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			projects: [],
			lang:vi
		}
	}
	fetchProjectCategoryFromServer() {
		fetch('/api/project_category', {
			credentials: 'include',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
			}
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({categories:responseJson});
			console.log('fetch categories result: ',this.state.category);
		})
	}
	fetchProjectsFromServer(categoryName) {
		var apiParams = (categoryName)? categoryName : 'all';
		fetch('/api/project_category/'+apiParams, {
			credentials: 'include',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
			}
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({projects:responseJson});
			console.log('fetch projects result: ',this.state.projects);
		})
	}
	componentWillMount() {
		this.fetchProjectCategoryFromServer();
		this.fetchProjectsFromServer(this.props.params.name);
		switch (this.props.locale) {
			case 'en':
				this.setState({lang:en});
				break;
			default:
				this.setState({lang:vi});
		}
	}
	componentWillUnmount() {
		this.setState({categories:[],projects:[]});
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.params.name != this.props.params.name) {
			this.fetchProjectsFromServer(nextProps.params.name);
		}
		switch (nextProps.locale) {
			case 'en':
				this.setState({lang:en});
				break;
			default:
				this.setState({lang:vi});
		}
	}
	_renderCategoryLink() {
		if (this.props.params.name && this.state.categories.length) {
			var {categories} = this.state;
			var locationKey = categories.findIndex(item => item.key==this.props.params.name); //tim index cua params hien tai trong this.state.categories
			console.log('locationKey: ',categories);
			var label = (this.props.locale == 'vi')? categories[locationKey].name : categories[locationKey].tiengAnh;
			return (<span> <span style={{margin:'0 10px'}}>|</span> <Link to={"/project_category/"+this.props.params.name}>{label}</Link></span>)
		}
		else return null;
	}
	render() {
		console.log('locale: ',this.props.locale,this.state.lang);
		var nodeList = (!this.state.categories.length)? null : this.state.categories.map(item => {
			var label = (this.props.locale == 'vi')? item.name : item.tiengAnh;
			return (
				<NavBarItem route={'/project_category/'+item.key}>
					{label}
				</NavBarItem>
			);
		});
		var allText = (this.props.locale == 'vi')? 'Tất cả': 'All Projects'
		console.log("lang",this.state.lang.portfolio);
		return (
			<MainLayout
				switchLang={this.props.switchLang}
				locale={this.props.locale}>
				<div className={globalStyles.breadscrumb}>
					<Link to="/project_category">{this.state.lang.portfolio}</Link>
					{this._renderCategoryLink()}
				</div>
				<NavBar>
					<NavBarItem route={'/project_category/'}>
						{allText}
					</NavBarItem>
					{nodeList}
				</NavBar>

				<ItemGrid item={"project"} data={this.state.projects}/>
			</MainLayout>
		)
	}
}
