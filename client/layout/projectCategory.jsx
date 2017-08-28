import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/project_style.css';

import MainLayout from 'client/layout/main.jsx';
import NavBar from 'client/components/navBar.jsx';
import NavBarItem from 'client/components/navBarItem.jsx';
import ItemGrid from 'client/components/itemGrid.jsx';

export default class ProjectCategory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			projects: [],
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
			console.log('fetch result: ',this.state.category);
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
			console.log('fetch result: ',this.state.projects);
		})
	}
	componentWillMount() {
		this.fetchProjectCategoryFromServer();
		this.fetchProjectsFromServer(this.props.params.name);
	}
	componentWillUnmount() {
		this.setState({categories:[],projects:[]});
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.params.name != this.props.params.name) {
			this.fetchProjectsFromServer(nextProps.params.name);
		}
	}
	render() {
		console.log('categories: ',this.state.categories);
		var nodeList = (!this.state.categories.length)? null : this.state.categories.map(item => {
			return (
				<NavBarItem route={'/project_category/'+item.key}>
					{item.name}
				</NavBarItem>
			);
		});
		return (
			<MainLayout>
				<NavBar>
					<NavBarItem route={'/project_category/'}>
						Tất cả
					</NavBarItem>
					{nodeList}
				</NavBar>
				<ItemGrid item={"project"} data={this.state.projects}/>
			</MainLayout>
		)
	}
}
