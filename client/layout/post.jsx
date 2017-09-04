import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/blog_style.css';

import MainLayout from 'client/layout/main.jsx';

export default class PostPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		}
	}
	fetchPostFromServer() {
		fetch('/api/post/'+this.props.params.key, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
		}).then((response) => response.json()).then((responseJson) => {
			console.log('fetch post result: ',responseJson);
			this.setState({data:responseJson});
		});
	}
	componentWillMount() {
		this.fetchPostFromServer();
	}
	render() {
		return (
				<MainLayout>
					<Post data={this.state.data} />
				</MainLayout>
		)
	}
}

export class Post extends React.Component {
	render() {
		var date = (this.props.data.ngayDang)? new Date(this.props.data.ngayDang): new Date();
		var parsedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
		var content = (this.props.data.noiDung)? this.props.data.noiDung.dayDu : '';
		return (
			<div className={globalStyles.main_flex_container}>
				<div className={globalStyles.col_4}>
					<div className={styles.content_left_wrapper}>
						<div className={styles.content_left}>
							<h1>{this.props.data.tieuDe}</h1>
							<p>{parsedDate}</p>
						</div>
					</div>
				</div>
				<div className={globalStyles.col_8}>
					<div className={styles.content_right}>
						<p
							style={{marginTop:'20px'}}
							dangerouslySetInnerHTML={{__html: content}}>
						</p>
					</div>
				</div>
			</div>
		)
	}
}
