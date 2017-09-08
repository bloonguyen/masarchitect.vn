import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/blog_style.css';
import AvailablePost from 'client/components/getData.jsx'
import MainLayout from 'client/layout/main.jsx';

export default class BlogPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogData: []
		}
	}
	fetchBlogPostsFromServer() {
		fetch('/api/blog', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
		}).then((response) => response.json()).then((responseJson) => {
			this.setState({blogData:responseJson});
			console.log('fetch result: ',this.state.blogData);
		});
	}
	componentWillMount() {
		this.fetchBlogPostsFromServer();
	}
	render() {
		var nodeList = this.state.blogData.map((item,index) => {
			if (item.kieu == "news"){
				return (<AvailablePost
					 		data={item}
							indexKey={index}
							/>)
			}
		})
		return (
				<MainLayout locale={this.props.locale}>
					{nodeList}
				</MainLayout>
		)
	}
}
