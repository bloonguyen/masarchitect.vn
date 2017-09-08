import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import AvailablePost from 'client/components/getData.jsx'
import globalStyles from 'client/styles/globalStyles.css';
import blogStyles from '../layout/styles/blog_style.css';
export default class Press extends React.Component {
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
			if (item.kieu == "press"){
				return (<AvailablePost
					 		data={item}
							indexKey={index}
							/>)
			}
		})
		return (
			<div>
					{nodeList}
                    </div>
		)
	}
}
