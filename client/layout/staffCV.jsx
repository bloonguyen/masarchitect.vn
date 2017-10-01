import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import globalStyles from 'client/styles/globalStyles.css';
import styles from './styles/blog_style.css';
import MainLayout from 'client/layout/main.jsx';
import NavBar from 'client/components/navBar.jsx';
import NavBarItem from 'client/components/navBarItem.jsx';
const vi = {
    about: 'Hồ sơ',
    general: 'Giới thiệu',
    staff: 'Nhân sự',
    press: 'Truyền thông'
}

const en = {
    about: 'About',
    general: 'Introduction',
    staff: 'Our team',
    press: 'Press release'
}

export default class StaffCV extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
            lang: vi
		}
	}

    fetchCVFromServer() {
		fetch('/api/ourteam/'+this.props.params.key, {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
		}).then((response) => response.json()).then((responseJson) => {
			console.log('fetch post result: ',responseJson);
			this.setState({data:responseJson});
		});
	}
    componentWillReceiveProps(nextProps) {
        switch (nextProps.locale) {
            case 'en':
                this.setState({lang:en});
                break;
            default:
                this.setState({lang:vi});
        }
    }
    componentWillMount() {
        switch (this.props.locale) {
            case 'en':
                this.setState({lang:en});
                break;
            default:
                this.setState({lang:vi});
        }
        this.fetchCVFromServer();
    }
    _renderCV(){
        console.log(this.state.data);
        return null;
    }
	render() {
        console.log("Param",this.props.params.key);
        return (
            <MainLayout
                switchLang={this.props.switchLang}
                locale={this.props.locale}>
                <div style={{marginBottom:'10px'}} className={globalStyles.breadscrumb}>
                    <Link to="/about">{this.state.lang.about}</Link>
                    <span style={{margin:'0 10px'}}> | </span>
                    <Link to={"/about/staff"}>{this.state.lang.staff}</Link>
                </div>
                <NavBar>
                    <NavBarItem route={'/about/general'}>{this.state.lang.general}</NavBarItem>
                    <NavBarItem route={'/about/staff'}>{this.state.lang.staff}</NavBarItem>
                    <NavBarItem route={'/about/press'}>{this.state.lang.press}</NavBarItem>
                </NavBar>
                <div className={globalStyles.content_board}>{this._renderCV()}</div>
            </MainLayout>
        );
	}
}

export class Post extends React.Component {
	render() {
	//	var date = (this.props.data.ngayDang)? new Date(this.props.data.ngayDang): new Date();
		var date = new Date();
		var youtubeUrl = (this.props.data.youtubeLink)? this.props.data.youtubeLink : '';
		youtubeUrl = youtubeUrl.replace("watch?v=","embed/")
		var parsedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
		var content = (this.props.data.noiDung)? this.props.data.noiDung.dayDu : '';
		var url = (this.props.data.hinhDaiDien)? (this.props.data.hinhDaiDien.url) : '';
		var youtubeEmbeded = (this.props.data.youtubeLink)? (
			<div className={styles.youtube_wrapper}>
				<Iframe url={youtubeUrl} frameborder="0" width="100%" height="100%" display="block" position="absolute" allowfullscreen="true"></Iframe>
			</div>
		) : null;
		return (
			<div className={globalStyles.main_flex_container}>
				<div className={styles.content_wrapper} style={{display:'initial'}}>
						<div className={styles.content_left_wrapper}>
							<div className={styles.title} style={{textTransform:'uppercase'}}>
								{this.props.data.tieuDe}
							</div>
							<p className={styles.publishedDate}>
								{parsedDate}</p>
						</div>
						<div className={styles.content_right}>
						{youtubeEmbeded}
							<p className={styles.title} style={{fontSize:'13px',fontWeight:'300'}}
								dangerouslySetInnerHTML={{__html: content}}>
							</p>
						</div>
				</div>
			</div>
		)
	}
}
