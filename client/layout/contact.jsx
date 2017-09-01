import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import MainLayout from 'client/layout/main.jsx';
import GoogleMap from 'googlemap-react';
import {App} from 'client/layout/ggmap.jsx'


export default class ContactPage extends React.Component{
    render(){
        return (
            <MainLayout>
                <App/>
            </MainLayout>
        );
    }
}
