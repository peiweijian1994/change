import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button ,Popover,Alert,Avatar} from 'antd';
import './index.less';
class SenderMessage extends Component {

    render() {
        let content = <p>hello world!</p>
        return (
            <div className="sendMessageInfo">
                <div className="userFace">
                    <Avatar size={32} icon="user" />
                </div>
                <div className="bubble">
                    {/* <div className="horn"></div> */}
                    <div className="bubbleContent">
                        <div>
                            <div className="content">
                                <pre>
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                    hello world !
                                </pre>
                            </div>
                        </div>
                    </div>
                </div><br/>
            </div>
        )
    }
}
SenderMessage.propTypes = {
}
export default SenderMessage ;