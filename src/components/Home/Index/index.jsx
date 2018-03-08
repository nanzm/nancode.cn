import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Icon, Tag, Avatar} from 'zent';

import {addGun, removeGun, addGunSync} from '../../../redux/test'
import {Route, Link, Switch, Redirect} from 'react-router-dom';

import "./index.less"

import Default from '@/components/Home/Default/index';
import Readhub from '@/components/Home/Readhub/index';
import Blog from '@/components/Home/Blog/index';
import Movie from '@/components/Home/Movie/index';
import Schedule from '@/components/Home/Schedule/index';
import Images from '@/components/Home/Images/index';
import Tools from '@/components/Home/Tools/index';
import Setting from '@/components/Home/Setting/index';

@connect(
    state => ({num: state}),
    {addGun, removeGun, addGunSync}
)
class App extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const currentPath = this.props.location.pathname;
        const menuList = [{
            id: 1,
            path: '/home',
            text: '首页',
            icon: 'summary-o'
        }, {
            id: 2,
            path: '/home/readhub',
            text: '阅读文章',
            icon: 'calendar-o'
        }, {
            id: 3,
            path: '/home/blog',
            text: '博客记录',
            icon: 'goods-o'
        }, {
            id: 4,
            path: '/home/movie',
            text: '电影预告',
            icon: 'youzan-o'
        }, {
            id: 5,
            path: '/home/schedule',
            text: '图片整理',
            icon: 'clock-o'
        }, {
            id: 6,
            path: '/home/images',
            text: '任务表',
            icon: 'message-o'
        }, {
            id: 7,
            path: '/home/tools',
            text: '工具箱',
            icon: 'shop-o'
        }, {
            id: 8,
            path: '/home/Setting',
            text: '设置',
            icon: 'settings-o'
        }];

        return (
            <div className="app-root">
                <aside className="app-sidebar">
                    <div className="app-shop-overview">
                        <Avatar className="avatar" shape="square">MJ</Avatar>
                        <h4>test</h4>
                        <Tag color="#9370db" rounded={false}>测试</Tag>
                    </div>
                    <ul className="app-sidebar-container">
                        {menuList.map((item) => {
                            return <li key={item.id}>
                                <Link to={item.path} className={item.path === currentPath ? 'active' : ''}>
                                    <Icon className={'icon icon-' + item.id} type={item.icon}/>
                                    {item.text}
                                </Link></li>
                        })}
                    </ul>

                    <div className="app-userinfo">
                        <Icon className="icon" type="customer-o"/>
                        <span>nan</span>
                    </div>
                </aside>
                <div className="app-container">
                    <div className="page-dashboard">
                        <Switch>
                            <Redirect from='/' exact to='/home'/>
                            <Route path="/home" exact component={Default}/>
                            <Route path="/home/readhub" component={Readhub}/>
                            <Route path="/home/blog" component={Blog}/>
                            <Route path="/home/movie" component={Movie}/>
                            <Route path="/home/schedule" component={Schedule}/>
                            <Route path="/home/images" component={Images}/>
                            <Route path="/home/tools" component={Tools}/>
                            <Route path="/home/Setting" component={Setting}/>
                            <Route component={Default}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
