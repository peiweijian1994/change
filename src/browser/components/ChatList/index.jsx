import React, { Component } from 'react';
import { number, bool, string, array, object} from 'prop-types';
import { Button ,Icon} from 'antd';
import './index.less';
import { Scrollbars } from 'react-custom-scrollbars';
import Chat from "../chat/index.jsx";
class ChatList extends Component {
    state = {
        number : 0
    }
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.setState({
            number:500
        })
    }
    getMySessionList(){

    }
    getMyFriendList(){

    }
    render() {
        let chats=[{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"},{a:"1"}]
        let state = this.state
        console.log(state.number)
        return (
            <div className='height100'>
                <div className='chatNav'>
                    <div className='navIcon'>
                        <Icon type="message"/>
                        <Icon type="team"/>
                    </div>
                </div>
                <div className='sessionList'>
                    <Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={200}
                        autoHeightMax={state.number}
                    >
                        {chats.map((chat,i)=> <Chat key={i} onclick="Chatroom()"/> )}
                        <div className='clear'></div>
                    </Scrollbars>
                </div>
            </div>    
        )
    }
}
ChatList.propTypes = {
}
export default ChatList ;