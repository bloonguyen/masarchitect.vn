import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/blog_style.css';

import MainLayout from 'client/layout/main.jsx';

import PostPage from 'client/layout/post.jsx';

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
			return (<BlogPost
				 		data={item}
						indexKey={index}
						/>)
		})
		return (
				<MainLayout locale={this.props.locale}>
					{nodeList}
				</MainLayout>
		)
	}
}

export class BlogPost extends React.Component {
	render() {
		var date = (this.props.data.publishedDate)? new Date(this.props.data.publishedDate): new Date();
		var parsedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
		if (this.props.data.kieu != "news") return null;
		return (
			<div className={globalStyles.main_flex_container}>
				<div className={globalStyles.col_4}>
					<div className={styles.content_left_wrapper}>
						<div className={styles.content_left}>
						<Link to={"/post/"+this.props.data.slug}>
						<div style={{marginTop:'10px',fontSize:'18px', fontWeight:'bold', fontFamily:'HelveticaNeue-Light'}}>
							{this.props.data.tieuDe}
							</div>
							<img style ={{width:'60%'}}src={this.props.data.hinhDaiDien.url}/>
							<p>{parsedDate}</p>
						</Link>
						</div>
					</div>
				</div>
				<div className={globalStyles.col_8}>
					<div className={styles.content_right}>


						<p
							style={{marginTop:'20px',fontSize:'18px', fontWeight:'no', fontFamily:'HelveticaNeue-Light'}}
							dangerouslySetInnerHTML={{__html: this.props.data.noiDung.tomTat}}>
						</p>
					</div>
				</div>
			</div>
		)
	}
}
