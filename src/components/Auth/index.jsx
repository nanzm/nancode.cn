import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import api from "@/api/user";
import {Notify} from 'zent';


@withRouter
class App extends Component {
    componentDidMount() {
        // const publicList = ['/login', '/register'];
        // const pathname = this.props.location.pathname;

        // 公开访问页面
        // if (publicList.indexOf(pathname) > -1) return;

        //登录检查
        api.isLogin().then((res) => {
            if (res.data.code === 0) {
                // this.props.history.push("/home");
            } else {
                this.props.history.push("/login");
                Notify.error('请登录')
            }
        });

    }

    render() {
        return (
            <div className="checkLogin"></div>
        )
    }

}

export default App;
