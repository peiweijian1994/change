import React, { Component } from 'react';
import {
    //Router,  //BrowserRouter 为通过hash值来切换路由
    Redirect,
    Switch,
    Route,
    HashRouter as Router,
} from 'react-router-dom';
import RouteWithSubRoutes from "../components/RouteWithSubRoutes/index.jsx";
import { number, bool, string, array, object } from 'prop-types';
import { Button } from 'antd';

import Home from './Home.jsx';
// import Menu from '../components/Menu/index.jsx'
import LoginRegister from './LoginRegister.jsx';
import ChatContent from "./ChatContent.jsx";
import FriendContent from "./FriendContent.jsx";

import './index.less';
const routes = [
    {
        path:"/home",
        component:Home,
        // exact:true,
        routes:[{
            path:"/home/chat",
            component:ChatContent,
            // exact:true
            // routes:[{
            //     path:'/home/chat/chatroom',
            //     component:chatroom
            // }]
        },{
            path:"/home/friend",
            component:FriendContent,
            // exact:true
            // routes:[{
            //     path:'/home/friend/details',
            //     component:chatroom
            // }]
        }]
},{
    path:'/login',
    component:LoginRegister,
    // exact:true
}]

class Main extends Component {
    render() {
        return (
            <div className="myChat">
                <Router>
                    <div className="main_layout height100">
                        <Switch>
                            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                            <Route path="/home/chat" component={ChatContent} />
                            <Route path="/login" component={LoginRegister} />
                            <Redirect path="/" to={{ pathname: "/home/chat"}} />
                            {/* <Redirect path="/" to={{ pathname: "/login"}} />                         */}
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
Main.propTypes = {
}
export default Main ;