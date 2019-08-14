import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
} from 'react-router-dom';
// 引入状态机管理供应商
import { Provider } from 'mobx-react';
// 引入全局样式
import "./index.less"
import * as stores from './stores';
// 引入主视图组件
import Main from './views/Main.jsx';
class App extends Component {
    render() {
        return (
            <div>
                <Main/>
            </div>
        )
    }
}

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
const MOUNT_NODE = document.getElementById('root');
//渲染组件  
ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    MOUNT_NODE
)  
