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
		var blog = this.props.locale == 'vi'? "TIN TỨC":"NEWS";
		console.log("blog:",blog);
		return (
				<MainLayout
					switchLang={this.props.switchLang}
					locale={this.props.locale}>
					<div className={globalStyles.breadscrumb}>
						<Link to="/blog">{blog}</Link>
					</div>
					<div className={globalStyles.content_board}>{nodeList}</div>
				</MainLayout>
		)
	}
}
