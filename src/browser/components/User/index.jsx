import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button ,Avatar} from 'antd';
import './index.less';
class User extends Component {
    render() {
        return (
            <div>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                {/* <Avatar icon="user" /> */}
            </div>
        )
    }
}
User.propTypes = {
}
export default User ;