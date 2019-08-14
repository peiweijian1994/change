import React, { Component } from 'react';
import { number, bool, string, array, object } from 'prop-types';
import { Button,Menu, Icon,Modal,Tabs ,Form } from 'antd';
import './index.less';
import Login from '../components/Login/index.jsx';
import Register from '../components/Register/index.jsx';
const TabPane = Tabs.TabPane;
class LoginRegister extends Component {
    state = {
        visible: true
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    callback(key) {
        console.log(key);
    }
    render() {
        const WrappedNormalLoginForm = Form.create()(Login);
        const WrappedRegistrationForm = Form.create()(Register);
        
        return (
            <div>
                {/* <Button type="primary" onClick={this.showModal}> */}
                    {/* 注册|登录 */}
                    {/* aaaa
                </Button> */}
                <Modal
                    title=""
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={450}
                    centered={true}
                    maskClosable={false}
                    closable={false}
                    >
                    <div>
                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab="登录" key="1">
                                <WrappedNormalLoginForm/>
                            </TabPane>
                            <TabPane tab="注册" key="2">
                                <WrappedRegistrationForm/>
                            </TabPane>
                        </Tabs>
                    </div>
                </Modal>
            </div>
        )
    }
}
LoginRegister.propTypes = {
}
export default LoginRegister ;