import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button ,Icon} from 'antd';
import './index.less';
class SysOperation extends Component {
    render() {
        return (
            <div className="system">
                <div className="close"><Icon type="close" /></div>
                <div><Icon type="fullscreen" /></div>
                <div><Icon type="minus" /></div>
            </div>
        )
    }
}
SysOperation.propTypes = {
}
export default SysOperation ;