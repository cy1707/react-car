import React, {Component} from 'react'
import {Link} from 'react-router'

import FootListComponent from '../../commonComponents/footList/footList'
import './mine.scss'
export default class MineComponent extends Component{
    // 如果登录，显示用户名
    componentDidMount(){
       
        if(window.localStorage.hasOwnProperty('username')){
            document.querySelector('.userInformationMsg').innerHTML = window.localStorage.username;
        }else{
            document.querySelector('.userInformationMsg').innerHTML = '登录查看更多信息';
        }
    }
    loginJurge(){
 
        if(window.localStorage.hasOwnProperty('username') == false){
            location.href = "http://localhost:888/#/login"           
        }

    }
    exit(){
        window.localStorage.removeItem('username');
        document.querySelector('.userInformationMsg').innerHTML = '登录查看更多信息';
    }
    render(){
        return (
            <div className="minePage"> 
                <div className="head_mine">
                    我的
                    <i className="comment outline icon"></i>
                </div>
                <div className="main_mine">
                    <div className="userImformation">
                        <div className="userInformationImg"><img src="./project/src/img/mine_user.jpg"/></div>
                        <div className="userInformationMsg" onTouchStart={this.loginJurge.bind(this)}>登录查看更多信息</div>
                    </div>
                    <div className="mine_list">
                        <div className="mine_list_t">
                            <div>订单中心</div>
                            <ul>
                                <Link to="/buyorder">
                                    <li>
                                        <img src="./project/src/img/mine_list1.jpg"/>
                                        <p>买车订单</p>
                                    </li>
                                </Link>
                                <li>
                                    <img src="./project/src/img/mine_list2.jpg"/>
                                    <p>卖车订单</p>
                                </li>
                            </ul>
                        </div>
                        <div className="mine_list_b">
                            <div>常用功能</div>
                            <ul>
                                <li>
                                    <img src="./project/src/img/mine_list3.jpg"/>
                                    <p>收藏车辆</p>
                                </li>
                                <li>
                                    <img src="./project/src/img/mine_list4.jpg"/>
                                    <p>订阅车源</p>
                                </li>
                                <li>
                                    <img src="./project/src/img/mine_list5.jpg"/>
                                    <p>砍价记录</p>
                                </li>
                                <li>
                                    <img src="./project/src/img/mine_list6.jpg"/>
                                    <p>降价提醒</p>
                                </li>
                                <li>
                                    <img src="./project/src/img/mine_list7.jpg"/>
                                    <p>浏览记录</p>
                                </li>
                                <li>
                                    <img src="./project/src/img/mine_list8.jpg"/>
                                    <p>购车贷款</p>
                                </li>
                                <li>
                                    <img src="./project/src/img/mine_list9.jpg"/>
                                    <p>车辆对比</p>
                                </li>
                                <li>
                                    <img src="./project/src/img/mine_list10.jpg"/>
                                    <p>在线客服</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mine_setting">
                        <li>
                            <span className="mine_setting_l">我的优惠</span>
                            <span className="mine_setting_r"><i className="angle right icon"></i></span>
                        </li>
                        <li>
                            <span className="mine_setting_l">电话客服</span>
                            <span className="mine_setting_r"><i className="angle right icon"></i></span>
                        </li>
                        <li>
                            <span className="mine_setting_l">意见反馈</span>
                            <span className="mine_setting_r"><i className="angle right icon"></i></span>
                        </li>
                        <li onTouchStart={this.exit.bind(this)}>
                            <span className="mine_setting_l">退出</span>
                            <span className="mine_setting_r"><i className="angle right icon"></i></span>
                        </li>
                    </ul>
                    <div className="mineRecommend">
                        <div className="mineRecommend_t">为你推荐</div>
                        <ul className="mineRecommend_c">
                            <li>
                                <div className="mineRecommend_cl">
                                    <img src=""/>
                                </div>
                                <div className="mineRecommend_cr">
                                    <a className="mineRecommend_crt">丰田凯美瑞 2013款 2.0G 舒适版</a>
                                    <div className="mineRecommend_crc">
                                        <span>2009年/</span>
                                        <span>16.5万公里</span>
                                    </div>
                                    <div className="mineRecommend_crb">
                                        <span>5万</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="foot_mine">
                    <FootListComponent/> 
                </div>
                
            </div>
        )
    }
}