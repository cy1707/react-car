import React, {Component} from 'react'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'


import FootListComponent from '../../commonComponents/footList/footList'
import './mine.scss'
import * as actions from './mineAction'


class MineComponent extends Component{
    
    componentDidMount(){
       
        if(window.localStorage.hasOwnProperty('username')){
            document.querySelector('.userInformationMsg').innerHTML = window.localStorage.username;
        }else{
            document.querySelector('.userInformationMsg').innerHTML = '登录查看更多信息';
        }
        this.props.recommend();
        
    }
    // 判断是否已经登录
    loginJurge(){
 
        if(window.localStorage.hasOwnProperty('username') == false){
            hashHistory.push({
                pathname:'/login'
            })
            // location.href = "http://localhost:888/#/login"           
        }

    }
    // 退出登录
    exit(){
        
        $('.ui.basic.modal').modal('show');
    }
    exitBtn(){
        window.localStorage.removeItem('username');
        document.querySelector('.userInformationMsg').innerHTML = '登录查看更多信息';
    }
    // 跳转详情页
    recommenddetail(id){
        hashHistory.push({
            pathname:'goods',
            query:{id:id}
        })
    }
    render(){
        // console.log('为你推荐',this.props.ajaxStatus);
        var html;
        // 为你推荐懒加载
        if(this.props.ajaxStatus == 0){
             html = <div className="mingLoading"><img src="./project/src/img/loading.jpg"/></div>;
        }else if(this.props.ajaxStatus == 1){
             html = '';
        }else if(this.props.ajaxStatus){
             html = <div className="mingLoading"><img src="./project/src/img/loadingError.jpg"/></div>;
        }
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
                                <Link to="/sellorder">
                                    <li>
                                        <img src="./project/src/img/mine_list2.jpg"/>
                                        <p>卖车订单</p>
                                    </li>
                                </Link>
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
                        <div className="mineRecommend_big_c">
                            {
                                this.props.ajaxResult.map( item => {
                                    return (
                                        <ul className="mineRecommend_c" key={item.id} onTouchStart={this.recommenddetail.bind(this,item.id)}>
                                            <li>
                                                <div className="mineRecommend_cl">
                                                    <img src={item.imgurl.split(',')[0]}/>
                                                </div>
                                                <div className="mineRecommend_cr">
                                                    <a className="mineRecommend_crt">{item.name}</a>
                                                    <div className="mineRecommend_crc">
                                                        <span> {
                                                            item.license_time.slice(0,4)
                                                        }年/
                                                        </span>
                                                        <span>{item.mileage}万公里</span>
                                                    </div>
                                                    <div className="mineRecommend_crb">
                                                        <span>{item.oprice}万</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    )
                                })
                            }
                            {html}
                        </div>
                    </div>
                    <div className="ui basic modal">
                        <div className="content">
                            <p>是否确认退出？</p>
                        </div>
                        <div className="actions">
                            <div className="ui red basic cancel inverted button" style={{padding:".266667rem",margin:".133333rem"}}>
                            <i className="remove icon"></i>
                            否
                            </div>
                            <div className="ui green ok inverted button"  onTouchStart={this.exitBtn.bind(this)} style={{padding:".266667rem",margin:".133333rem"}}>
                            <i className="checkmark icon"></i>
                            是
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot_mine">
                    <FootListComponent/> 
                </div>
                
            </div>
        )
    }
}

let mapStateToProps = (state) => {
     console.log('component的',state)
    return {
        ajaxStatus: state.mineRecommend.status,
        ajaxResult: state.mineRecommend.myresult || []
    }
}

export default connect(mapStateToProps, actions)(MineComponent);