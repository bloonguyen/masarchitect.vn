import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

import MainLayout from 'client/layout/main.jsx';
import NavBar from 'client/components/navBar.jsx';
import NavBarItem from 'client/components/navBarItem.jsx';
import OurTeam from 'client/components/OurTeam.jsx';

import styles from './styles/about_style.css';

export default class AboutPage extends React.Component{
    _renderAbout(){
        switch (this.props.params.type) {
            case 'general':
                return (
                    <General/>
                )
            case 'staff':
                return (
                    <OurTeam locale={this.props.locale}/>
                )
            case 'press':
                return (
                    <Press/>
                )
            default:
                return (
                    <General/>
                )

        }
    }
    render(){
        console.log("Param",this.props.params.type);
        return (
            <MainLayout>
            <NavBar>
                <NavBarItem route={'/about/general'}>Giới thiệu</NavBarItem>
                <NavBarItem route={'/about/staff'}>Nhân sự</NavBarItem>
                <NavBarItem route={'/about/press'}>Truyền Thông</NavBarItem>
            </NavBar>
            {this._renderAbout()}
            </MainLayout>
        );
    }
}

export class General extends React.Component{
    render(){
        return (
            <div className={styles.wrapper}>
                <div className={styles.para_wrapper}>
                    <h1 className={styles.title}>Giới thiệu</h1>
                    <p className ={styles.para}>Được thành lập từ năm 2009, trong quá trình xây dựng thương hiệu riêng MAS Architecture
                    đã đạt được nhiều  thành công trong lĩnh vực thiết kế và xây dựng. Công ty của chúng tôi
                    là nơi tập họp các kiến trúc sư, kĩ sư trẻ đầy kĩ năng, thiết kế các giải pháp không gian
                    thông minh. Điều quan trọng nhất từng bước tạo nên thành công của chúng tôi là phục vụ
                    mọi khách hàng với tinh thần làm việc luôn luôn sáng tạo và trách nhiệm.</p>
                </div>

                <div className={styles.para_wrapper}>
                    <h1 className={styles.title}>Lĩnh vực thiết kế </h1>
                    <p className ={styles.para}>Được thành lập từ năm 2009, trong quá trình xây dựng thương hiệu riêng MAS Architecture
                    đã đạt được nhiều  thành công trong lĩnh vực thiết kế và xây dựng. Công ty của chúng tôi
                    là nơi tập họp các kiến trúc sư, kĩ sư trẻ đầy kĩ năng, thiết kế các giải pháp không gian
                    thông minh. Điều quan trọng nhất từng bước tạo nên thành công của chúng tôi là phục vụ
                    mọi khách hàng với tinh thần làm việc luôn luôn sáng tạo và trách nhiệm.</p>
                </div>

                <div className={styles.para_wrapper}>
                    <h1 className={styles.title}>Lĩnh vực thi công </h1>
                    <p className ={styles.para}>Được thành lập từ năm 2009, trong quá trình xây dựng thương hiệu riêng MAS Architecture
                    đã đạt được nhiều  thành công trong lĩnh vực thiết kế và xây dựng. Công ty của chúng tôi
                    là nơi tập họp các kiến trúc sư, kĩ sư trẻ đầy kĩ năng, thiết kế các giải pháp không gian
                    thông minh. Điều quan trọng nhất từng bước tạo nên thành công của chúng tôi là phục vụ
                    mọi khách hàng với tinh thần làm việc luôn luôn sáng tạo và trách nhiệm.</p>
                </div>
            </div>

        );
    }
}
export class Staff extends React.Component{
    render(){
        return (
            <div>staff</div>
        );
    }
}
export class Press extends React.Component{
    render(){
        return (
            <div>press</div>
        );
    }
}
