import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button } from 'antd';
import SenderMessage from "../SenderMessage/index.jsx";
import MyMessage from "../MyMessage/index.jsx";
import './index.less';
class MessageList extends Component {
    render() {
        return (
            <div>
                <SenderMessage/>
                <MyMessage/>
                <SenderMessage/>
                <MyMessage/>
                <SenderMessage/>
                <MyMessage/>
                <SenderMessage/>
                <MyMessage/>
            </div>
        )
    }
}
MessageList.propTypes = {
}
export default MessageList ;