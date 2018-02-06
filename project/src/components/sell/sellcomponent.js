import React, {Component} from 'react'
import {connect} from 'react-redux'

import   './sell.scss'


export default class SellComponent extends Component{
    componentWillMount(){
        $(document).ready(function(){
            $('.ui.accordion').accordion({duration:'click'});
        });
    }

    addCart(proItem){
        
    }

    render(){
        return (
            <div id="box">
                <div className="sell_top">
                    <img src="" alt="" />
                    <div className='p'><span>21321321</span>车主提交了卖车申请</div>
                    <div className="sell_input">
                        <input type="text" placeholder="请输入手机号码"/>
                        <button className="x_btn1">预约卖车</button>
        
                    </div>
                    <div className="link_button">
                        <button className="x_btn2">免费咨询</button>
                        <button >爱车估价</button>
                    </div>
                    
                </div>
                <div className="green_blank"></div>
                <section className="sell_enter">
                    <img src="project/src/img/s1.jpg" alt="" className="img1"/>
                </section>
                <div className="green_blank"></div>
                <section className="sell_enter">
                    <img src="project/src/img/s2.jpg" alt="" />
                </section>
                <div className="green_blank"></div>
                <section className="deal_record">
                    <h2>成交记录</h2>
                    <ul></ul>
                </section>
                <div className="green_blank"></div>
                <section className="sell_step">
                    <p className="sell_tit">卖车流程</p>
                    <div className="img_step">
                        <ul>
                            <li>提交信息</li>
                            <li>上门服务</li>
                            <li>买家看车</li>
                            <li>交易过户</li>
                        </ul>
                    </div>
                </section>
                <div className="green_blank"></div>
                <section className="sell_ser">
                    <div className="ser_1">
                        <img src="project/src/img/s4.png" alt="" />
                    </div>
                    <div className="ser_2">
                        <img src="project/src/img/s5.png" alt="" />
                    </div>
                    <div className="ser_3">
                        <img src="project/src/img/s6.png" alt="" />
                    </div>
                    <div className="ser_4">
                        <img src="project/src/img/s7.png" alt="" />
                    </div>
                </section>
                <div className="green_blank"></div>
                <section className="sell_guide">
                    <p className="sell_tit">买车指南</p>
                    <div className="sell_list">
                        <div className="ui accordion">
                          <div className="title"><i className="dropdown icon"></i>      瓜子二手车直卖网是谁？ </div>
                          <div className="content">
                            <p className="transition hidden">瓜子二手车直卖网是中国领先的二手车直卖平       台，平均每一分钟就成交一辆。瓜子二手车撮合个人直接卖给个人，没有中间商赚差   价。在瓜子平台上，车源均为8年15万公里以内的个人二手车，并通过瓜子专业评估       师的五维立体检测，从源头保障车况。</p>
                          </div>
                          <div className="title"><i className="dropdown icon"></i> 出售车辆需符合怎样的条件？ </div>
                          <div className="content">
                            <p>
                                年限里程需在8年/15万公里内，无重大事故，个人车源，过户次数不超过2次且最近2个月内无过户记录
                            </p>
                          </div>
                          <div className="title"><i className="dropdown icon"></i> 卖车流程是怎样的？ </div>
                          <div className="content">
                            <p>1、提交手机号码或拨打400-060-8634联系我们</p>
                            <p>2、接受评估师专业的上门质检，定出售价</p>
                            <p>3、评估师、交易专员带领买家上门看车</p>
                            <p>4、达成交易协议，瓜子二手车直卖网帮你办过户</p>
                          </div>
                          <div className="title"><i className="dropdown icon"></i>卖车需要准备些什么？ </        div>
                          <div className="content">
                            <p className="transition hidden">
                                在提交手机号码后，我们会与您联系，在约定时间准备好以下材料即可：
                            </p>
                            <p>1、身份证</p>
                            <p>2、行驶证</p>
                            <p>3、车辆登记证</p>
                            <p>4、购置税本</p>
                            <p>5、购置税发票</p>
                            <p>6、车辆钥匙</p>
                            <p>7、交强险单</p>
                            <p>8、购车发票/最近一次过户发票</p>
                          </div>
                          <div className="title"><i className="dropdown icon"></i> 大概多久能成交？ </div>
                          <div className="content">
                            <p className="transition hidden">       
                                大部分车辆在瓜子二手车直卖网上只需一周就可成交
                            </p>
                          </div>
                          <div className="title"><i className="dropdown icon"></i> 是否收取费用？ </div>
                          <div className="content">
                            <p className="transition hidden">       
                                
                                瓜子二手车直卖网不会收取卖家任何费用，交易达成才会向买家收取不超过交易金额4%的服务费
                
                            </p>
                          </div>

                        </div>
                    </div>
                    
                </section>
            </div>
        )
    }
} 

