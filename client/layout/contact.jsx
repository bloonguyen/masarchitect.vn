import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import MainLayout from 'client/layout/main.jsx';
import Iframe from 'react-iframe';


export default class ContactPage extends React.Component{

    render(){
        return (
            <MainLayout>
             <div style={{height: '100%'}}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6065474345946!2d108.21297485005432!3d16.085894388816005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183f7bf7432b%3A0x7f010bc27f2fb9f5!2sMAS+Architecture!5e0!3m2!1sen!2sus!4v1504512952096" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></Iframe>
            </div>
            </MainLayout>
        );
    }
}
