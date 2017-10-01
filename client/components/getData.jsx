import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from '../layout/styles/blog_style.css';

export default class AvailablePost extends React.Component {
	render() {
		var date = (this.props.data.publishedDate)? new Date(this.props.data.publishedDate): new Date();
		var parsedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
		var url = (this.props.data.hinhDaiDien)? this.props.data.hinhDaiDien.url : '';
		return (
			<div className={globalStyles.main_flex_container}>
				<div className={styles.content_wrapper}>
					<div className={globalStyles.col_4}>
						<div className={styles.content_right}>
							<Link to={"/post/"+this.props.data.slug}>
								<img src={url}/>
							</Link>
						</div>
					</div>
					<div className={globalStyles.col_8}>
							<div className={styles.content_left}>
							<Link to={"/post/"+this.props.data.slug} style={{textDecoration:'none'}}>
								<div className={styles.text_board}>
									<div>
										<div style={{fontWeight:'500',marginBottom:'10px',textTransform:'uppercase'}}>
											{this.props.data.tieuDe}
										</div>
										<p dangerouslySetInnerHTML={{__html: this.props.data.noiDung.tomTat}}>
										</p>
									</div>
									<p style ={{color:'#828282',marginBottom:'0'}}>{parsedDate}</p>
								</div>
							</Link>
							</div>
					</div>
				</div>
			</div>
		)
	}
}
