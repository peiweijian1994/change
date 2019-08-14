import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button } from 'antd';
import './index.less';
// import User from "../components/User";
// import ChatList from '../components/ChatList/index.jsx';
// import ChatRoom from "../components/ChatRoom/index.jsx";
class FriendContent extends Component {
    render() {
        return (
            <div>
                <div className='chatList'>
                    {/* <ChatList/> */}
                    friendList
                </div>
                <div className="chatInfo">
                    {/* <ChatRoom/> */}
                    userinfo
                </div>
            </div>
        )
    }
}
FriendContent.propTypes = {
}
export default FriendContent ;