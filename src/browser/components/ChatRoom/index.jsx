import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button ,Icon,Input } from 'antd';
import MessageList from "../MessageList/index.jsx";
import { Scrollbars } from 'react-custom-scrollbars';
import './index.less';
import  io from "socket.io-client"
import {SocketServer} from "../../actions/index.js"

const { TextArea } = Input;
class ChatRoom extends Component {
    constructor(porps){
        super(porps)
    }
    sendMessage(){
        SocketServer.instance.socket.emit('pvp', {msg:'hi, server'});
    }
    render() {
        return (
            <div className="chatRoom">
                <div className="roomTitle">
                    <p>title(username)</p>
                </div>
                <div className="content">
                    <Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={200}
                        // autoHeightMax={460}
                        style={{"height": "98%"}}
                    >
                        <MessageList/>
                    </Scrollbars>
                </div>
                <div className="inputBox">
                    <div className="operation">
                        <span><Icon type="smile" theme="outlined"/></span>
                        <span><Icon type="folder-open" /></span>
                        <span><Icon type="picture" /></span>
                    </div>
                    <div className="inputContent">
                        <TextArea rows={2} />
                    </div>
                    <div className="inputBtn">
                        <Button onClick={()=>{this.sendMessage()}} type="primary">发送</Button>
                    </div>
                </div>
            </div>
        )
    }
}
ChatRoom.propTypes = {
}
export default ChatRoom ;