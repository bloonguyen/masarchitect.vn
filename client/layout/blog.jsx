import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/blog_style.css';

import MainLayout from 'client/layout/main.jsx';

export default class BlogPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogData: []
		}
	}
	fetchBlogPostsFromServer() {
		fetch('/api/post', {
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
			return (<BlogPost
				 		data={item}
						indexKey={index}
						/>)
		})
		return (
				<MainLayout>
					{nodeList}
				</MainLayout>
		)
	}
}

export class BlogPost extends React.Component {
	render() {
		var date = (this.props.data.publishedDate)? new Date(this.props.data.publishedDate): new Date();
		var parsedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
		return (
			<div className={globalStyles.main_flex_container}>
				<div className={globalStyles.col_4}>
					<div className={styles.content_left_wrapper}>
						<div className={styles.content_left}>
							<h1>{this.props.data.title}</h1>
							<p>{parsedDate}</p>
						</div>
					</div>
				</div>
				<div className={globalStyles.col_8}>
					<div className={styles.content_right}>
						<p
							style={{marginTop:'20px',fontStyle:'italic'}}
							dangerouslySetInnerHTML={{__html: this.props.data.content.brief}}>
						</p>
						<p
							dangerouslySetInnerHTML={{__html: this.props.data.content.extended}}>
						</p>
					</div>
				</div>
			</div>
		)
	}
}
