import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/blog_style.css';
import MainLayout from 'client/layout/main.jsx';
import Iframe from 'react-iframe';

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
				<MainLayout locale={this.props.locale}>
					<Post data={this.state.data} />
				</MainLayout>
		)
	}
}

export class Post extends React.Component {
	render() {
	//	var date = (this.props.data.ngayDang)? new Date(this.props.data.ngayDang): new Date();
		var date = new Date();
		var youtubeUrl = (this.props.data.youtubeLink)? this.props.data.youtubeLink : '';
		youtubeUrl = youtubeUrl.replace("watch?v=","embed/")
		var parsedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
		var content = (this.props.data.noiDung)? this.props.data.noiDung.dayDu : '';
		var url = (this.props.data.hinhDaiDien)? (this.props.data.hinhDaiDien.url) : '';
		var youtubeEmbeded = (this.props.data.youtubeLink)? (
			<div className={styles.youtube_wrapper}>
				<Iframe url={youtubeUrl} frameborder="0" width="100%" height="100%" display="block" position="absolute" allowfullscreen="true"></Iframe>
			</div>
		) : null;
		return (
			<div className={globalStyles.main_flex_container}>
				<div className={styles.content_wrapper}>
					<div className={globalStyles.col_4}>
						<div className={styles.content_left_wrapper}>
							<div style={{marginTop:'10px',fontSize:'25px', fontWeight:'bold',padding:' 0px 20px'}}>
								{this.props.data.tieuDe}
							</div>
							<p
								style={{color:'gray',padding:' 0px 20px'}}>
								{parsedDate}</p>
						</div>
					</div>
					<div className={globalStyles.col_8}>
						<div className={styles.content_right}>
						{youtubeEmbeded}
						<img src={url}/>
							<p
								style={{marginTop:'20px'}}
								dangerouslySetInnerHTML={{__html: content}}>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
