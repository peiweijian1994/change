import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button } from 'antd';
import './index.less';
// import User from "../components/User";
import ChatList from '../components/ChatList/index.jsx';
import ChatRoom from "../components/ChatRoom/index.jsx";
class ChatContent extends Component {
    constructor(prop){
        super(prop)
    }
    chatroom(obj){

    }
    render() {
        return (
            <div className='height100'>
                <div className='chatList'>
                    <ChatList/>
                </div>
                <div className="chatInfo">
                    <ChatRoom/>
                </div>
                <div className='clear'></div>
            </div>
        )
    }
}
ChatContent.propTypes = {
}
export default ChatContent ;