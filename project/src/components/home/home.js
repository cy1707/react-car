import React, {Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'

import FootListComponent from '../../commonComponents/footList/footList'
import HeadSearchComponent from '../../commonComponents/headSearch/headSearch'
import CarRecommendComponent from './carRecommend'
import './home.scss'

export default class HomeComponent extends Component{
    state = {
        api:'http://10.3.136.50:88/haoche',
    }
    
    // 好车推荐部分组件传参、切换
    carRecommendCreate(e){
        if(e.target.tagName.toLowerCase() == 'div'){
            var lis = e.target.parentElement.parentElement.parentElement.children;
            var len = e.target.parentElement.parentElement.parentElement.children.length;
            for(let i=0;i<len;i++){
                lis[i].children[0].className = '';
                console.log(e.target.innerText )
                if(e.target.innerText == '好车推荐'){
                    this.setState({api:'http://10.3.136.50:88/haoche'});
                    e.target.parentNode.className="active";
                }else if(e.target.innerText == '保卖车'){
                    this.setState({api:'http://10.3.136.50:88/baomai'});
                    e.target.parentNode.className="active";
                }else if(e.target.innerText == '降价急售'){
                    this.setState({api:'http://10.3.136.50:88/jishou'});
                    e.target.parentNode.className="active";
                }
            }
            console.log('home的',this.refs.c1.selector.props)
            // console.log(this.refs.c1);
            // this.refs.c1.getCars();
        }
        
    }
    render(){
        return (
            <div className="homePage"> 
                <header className="head_Search">
                    <HeadSearchComponent/>
                </header>
                <div className="main">
                    <div className="banner">
                        <img src="./project/src/img/banner1.jpg"/>
                    </div>
                    <div className="priceSelect">
                        <ul className="priceSelect_t">
                            <li><span>5万以下</span></li>
                            <li><span className="secondspan">5-10万</span></li>
                            <li><span>10-15万</span></li>
                            <li><span>15万以上</span></li>
                        </ul>
                        <ul className="priceSelect_c1">
                            <li><span>SUV</span></li>
                            <li><span>保卖车</span></li>
                            <li><span>准新车</span></li>
                            <li><span>急售</span></li>
                        </ul>
                        <ul className="priceSelect_c2">
                            <li>
                                <img src="./project/src/img/main_price1.jpg"/>
                                <p>大众</p>
                            </li>
                            <li>
                                <img src="./project/src/img/main_price2.jpg"/>
                                <p>丰田</p>
                            </li>
                            <li>
                                <img src="./project/src/img/main_price3.jpg"/>
                                <p>福特</p>
                            </li>
                            <li>
                                <img src="./project/src/img/main_price4.jpg"/>
                                <p>本田</p>
                            </li>
                            <li>
                                <img src="./project/src/img/main_price5.jpg"/>
                                <p>日产</p>
                            </li>
                            <li>
                                <img src="./project/src/img/main_price6.jpg"/>
                                <p>宝马</p>
                            </li>
                            <li>
                                <img src="./project/src/img/main_price7.jpg"/>
                                <p>别克</p>
                            </li>
                        </ul>
                        <div className="priceSelect_c3">
                            <Link to="/carlist"><button>查看全部优质车源</button></Link>
                        </div>
                        <div className="priceSelect_b">
                            <Link to="/sell"><button className="price_b1">免费卖车<i className="angle right icon"></i></button></Link>
                            <button className="price_b2">帮你估价<i className="angle right icon"></i></button>
                        </div>
                    </div>
                    <ul className="otherListSelect">
                        <li className="li1">
                            <img src="./project/src/img/otherprice_1.jpg"/>
                            <div className="big">瓜子金融</div>
                            <div className="small">付三成 开好车</div>
                        </li>
                        <li className="li2">
                            <img src="./project/src/img/otherprice_2.jpg"/>
                            <div className="big">瓜子保卖车</div>
                            <div className="small">限时出售 性价比高</div>
                        </li>
                        <li>
                            <img src="./project/src/img/otherprice_3.jpg"/>
                            <div className="big">毛豆新车</div>
                            <div className="small">厂商直供 首付一万起</div>
                        </li>
                    </ul>
                    <div className="hotTopic">
                        <div className="hotTopic_l">
                            <div className="hotTopic_lt">
                                <i><img src="./project/src/img/hotTopic_newcar.jpg"/></i>
                                <div>爆款新车 厂家直供</div>
                                <a><span>0到1成</span>首付开新车 ></a>
                                <img src="./project/src/img/hotTopic_l1.jpg"/>
                            </div>
                            <div className="hotTopic_lb">
                                <i><img src="./project/src/img/hotTopic_newcar.jpg"/></i>
                                <div>优雅动感 昂克赛拉</div>
                                <a>首付<span>1.23</span>万</a>
                                <img src="./project/src/img/hotTopic_lb.jpg" className="hotTopic_lbimg"/>
                            </div>    
                        </div>
                        <ul className="hotTopic_r">
                            <li className="hotTopic_rt">
                                <div>测测你的身价</div>
                                <a>秒获<span>50万</span>分期金额</a>
                                <i><img src="./project/src/img/hotTopic_r1.jpg" /></i>
                            </li>
                            <li className="hotTopic_rc">
                                <div>瓜子保卖车</div>
                                <a>限时出售 性价比高</a>
                                <i><img src="./project/src/img/hotTopic_r2.jpg" /></i>
                            </li>
                            <li className="hotTopic_rb">
                                <div>可迁全国</div>
                                <a>过户无障碍</a>
                                <i><img src="./project/src/img/hotTopic_r3.jpg" /></i>
                            </li>
                        </ul>
                    </div>
                    <ul className="hotSearch">
                        <li>
                            <div><i className="shopping bag icon"></i></div>
                            <a>分期购车</a>
                        </li>
                        <li>
                            <div><i className="search icon"></i></div>
                            <a>帮我找车</a>
                        </li>
                        <li>
                            <div><i className="pocket icon"></i></div>
                            <a>服务保障</a>
                        </li>
                        <li>
                            <div><i className="wpforms icon"></i></div>
                            <a>成交查询</a>
                        </li>
                    </ul>
                    <div className="headlineNews">
                        <div className="headlineNews_t">
                            瓜子头条
                        </div>
                        <ul className="headlineNews_b">
                            <li>
                                <button>评测</button>
                                <a>不到15万元的价格就能买到合资SUV！低价卖出，买到就是赚到</a>
                            </li>
                            <li>
                                <button>评测</button>
                                <a>配置高又豪华宽敞，一流的驾驶品质，运功型外观炫酷</a>
                            </li>
                            <li className="thirdli">
                                <button>导购</button>
                                <a>不到7万元的中国神车，同级别之中无车可敌！</a>
                            </li>
                            <li className="fouthli">
                                <button>用车</button>
                                <a>什么？ 这款英国血统级别的舒适小型车只要不到</a>
                            </li>
                        </ul>
                    </div>
                    <div className="carRecommend">
                        <ul className="carRecommend_t" onTouchStart={this.carRecommendCreate.bind(this)}>
                            <li>
                                <a className="active"><div>好车推荐</div></a>
                            </li>
                            <li>
                                <a><div>保卖车</div></a>
                            </li>
                            <li>
                                <a><div>降价急售</div></a>
                            </li>
                        </ul>
                        <div className="carRecommend_c">
                            <CarRecommendComponent api={this.state.api} ref="c1"/>
                        </div>
                        <div className="carRecommend_b">
                            <Link to="/carlist">查看更多车源</Link>
                        </div>
                    </div>
                </div>
                <footer className="foot_List">
                    <FootListComponent/>
                </footer>
            </div>
        )
    }
}