import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import   './goods.scss'

export default class goodsComponent extends Component{
    state = {
        count: 0,
        goods:[]
    }
    componentWillMount(){
        

        axios.get('http://10.3.136.50:88/one').then(res => {
                        
                        this.setState({goods : res.data.data.results})
                        
        
        
                    })
    }

    


    render(){
        return (
            <div id="g_box">
                    
                        {
                            this.state.goods.map((item) => {
                                return (
                                    <div className="detail_top">
                                        <div className="img_g">
                                            <img src={item.imgurl.split(',')[1]} alt="" />
                                        </div>
                                        <div className="img1_g">
                                            <img src="project/src/img/d1.jpg" alt="" />
                                        </div>
                                        <div className="product_head">
                                            <h1>{item.name}</h1>
                                            <div className="label_d">
                                                <span>4s保养</span>
                                                <span>0过户</span>
                                            </div>
                                            <div className="carmaster-price">
                                                <span className="car_1">车主报价</span>
                                                <span className="car_2">{item.oprice}万</span>
                                                <span className="car_3">新车含税{item.nprice}万</span>
                                                <span className="car_4">询底价</span>
                                            </div>    
                                        </div>
                                        <div className="loanbox">
                                            <img src="project/src/img/d2.jpg" alt="" />
                                        </div>
                                        <div className="loan-limit">
                                            <span>在线贷款秒批，最高可贷<em>50万</em></span>
                                            <span>测测贷款额度</span>
                                        </div>
                                        <div className="green_blank"></div>
                                        <div className="serverbox">
                                            <div className="column">
                                                <div className="column-title">
                                                    服务保障
                                                    <span>（服务费3500元，最低服务费）</span>
                                                </div>

                                            </div>
                                            <div className="server-tab">
                                                <ul>
                                                    <li className="icon_1"><span ></span><p>售后保障</p></li>
                                                    <li className="icon_2"><span ></span><p>14天可退</p></li>
                                                    <li className="icon_3"><span ></span><p>259项检测</p></li>
                                                    <li className="icon_4"><span ></span><p>优质个人车</p></li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="green_blank"></div>
                                        <div className="chat">
                                            <div className="c_head">
                                                基本信息
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        
                        }
                   
                   
            </div>

        )
    }


}