import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button ,Avatar,Icon,Badge} from 'antd';
import './index.less';
import moment from "moment";
moment.locale('zh-cn');
class Chat extends Component {
    
    render() {
        return (
            <div className="chat">
                <div className='userFace'>
                    <Badge offset={[0,5]} count={0}> <Avatar size={38} shape="square" icon="user" /></Badge>
                </div>
                <div className="content">
                    <span className="name">userName</span>
                    <span className="message">message</span>
                </div>
                <div className="newsTime">
                    <span>{moment().format('h:mm')}</span>
                </div>
            </div>
        )
    }
}
Chat.propTypes = {
}
export default Chat ;