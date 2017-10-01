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
        var vaitro = this.props.locale == 'vi' ? this.state.data.vaiTroTiengViet : this.state.data.vaiTroTiengAnh;
        var giaithich = this.props.locale == 'vi' ? this.state.data.giaiThichTiengViet : this.state.data.giaiThichTiengAnh;
        var anhDaiDien = this.state.data.anhDaiDien ? this.state.data.anhDaiDien.url : null ;
        return(
            <div className={globalStyles.main_flex_container}>
                <div className={styles.content_wrapper}>
                    <div className={globalStyles.col_4}>
                        <div className={styles.content_right}>
                                <img src={anhDaiDien}/>
                        </div>
                    </div>
                    <div className={globalStyles.col_8}>
                            <div className={styles.content_left}>
                                <div className={styles.text_board}>
                                    <div>
                                        <div style={{fontWeight:'500',marginBottom:'10px',textTransform:'uppercase'}}>
                                            {vaitro}
                                        </div>
                                        <p dangerouslySetInnerHTML={{__html: giaithich}}>
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
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
