import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button ,Icon} from 'antd';
import {
    Link,
    HashRouter as Router
} from 'react-router-dom';
import './index.less';

class Menu extends Component {
    render() {
        return (
            <div className="linkMenu">
                <Link to={{pathname:"/home/chat"}} replace><Icon  type="message" /></Link>
                <Link to={{pathname:"/home/friend"}} replace><Icon type="team" /></Link>
            </div>
        )
    }
}
Menu.propTypes = {
}
export default Menu ;