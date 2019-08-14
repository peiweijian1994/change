import {SocketServer }from "../actions/index.js"; 
import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button } from 'antd';
import './index.less';
import User from "../components/User/index.jsx";
import RouteWithSubRoutes from "../components/RouteWithSubRoutes/index.jsx";
import Menu from "../components/Menu/index.jsx";
import SysOperation from "../components/SysOperation/index.jsx";
class Home extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
    }
    componentDidMount(){
        SocketServer.Instance.connectIo();
    }
    render() {
        let {routes,history} = this.props;
        return (
            <div  className="height100">
                {/* <div className='navMenu'>
                    <div className="user">
                        <User/>
                    </div>
                    <div className="menu">
                        <Menu/>                        
                    </div>
                    <div className="sysOperation">
                        <SysOperation/>                        
                    </div>
                </div> */}
                <div className="height100">
                    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </div>
            </div>
        )
    }
}
Home.propTypes = {
}
export default Home ;