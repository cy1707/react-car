import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import * as actions from './goodsAction'
import {Link} from 'react-router'


import   './goods.scss'

 class goodsComponent extends Component{
    state = {
        count: 0,
        goods:[]
    }
    componentWillMount(){
        var id = location.href.split("=")[1];
    console.log(id);
        this.props.search(id).then(res => {
            console.log(res);
            
        });


    }

    


    render(){
        return (
            <div id="biggbox">
                <div className="g_header">
                <Link to="/carlist"><span className="back">&lt;</span></Link>
                    <h1>车况</h1>
                </div>
                 <div id="g_box">
                    
                        {

                            this.props.ajaxResult.map((item) => {
                                return (

                                    
                                   

                                    <div className="detail_top" key={item.id}>

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
                                            <ul>
                                                <li><span>表显里程</span><p>{item.mileage}</p></li>
                                                <li><span>上牌地</span><p>{item.license_area}</p></li>
                                                <li><span>变速箱</span><p>{item.biansuxiang}</p></li>
                                                <li><span>过户次数</span><p>0</p></li>
                                                <li><span>排放标准</span><p>{item.paifangbiaozhun}</p></li>
                                                <li><span>排量</span><p>{item.paifang}</p></li>
                                                <li><span>看车地址</span><p>白云</p></li>
                                                <li><span>上牌时间</span><p>{item.license_time.slice(0,10)}</p></li>

                                                
                                            </ul>
                                            <div className="btn-check">
                                                <div>查看车辆详细信息</div>
                                            </div>
                                        </div>
                                        <div className="green_blank"></div>
                                        <div className="diverman-say">
                                            <div className="d_head">
                                                车主介绍
                                            </div>
                                            <div className="diverman">
                                                <div className="pgs"><img src="project/src/img/d6.jpg" alt="" /></div>
                                                <span>车主谢先生</span>
                                                <p>职业-个体</p>
                                            </div>
                                            <div className="prob-list">
                                                <li>城市道路行驶</li>
                                                <li>上下班代步</li>
                                                <li>修理厂保养</li>
                                                <li>换新车</li>
                                                <li>多功能方向盘</li>
                                                <li>gps导航</li>
                                            </div>
                                        </div>
                                        <div className="green_blank"></div>
                                        <img src="project/src/img/d7.jpg" alt="" />
                                        <img src="project/src/img/d8.jpg" alt="" />
                                        
                                    </div>
                                )
                            })
                        
                        }
                         
                   
                </div>
                <div className="btn-group">
                    <div className="menu1">
                        <i></i>
                        客服
                    </div>
                    <div className="menu2">
                        <i></i>
                        收藏
                    </div>
                    <div className="menu3">
                        <i></i>
                        询底价
                    </div>
                    <a href="#" className="cut">砍价</a>
                     <Link to="/mess"><div className="appoin">预约看车</div></Link>
                </div>
            </div>
           

        )
    }


}

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.goods.status,
        ajaxResult: state.goods.result || []
    }
}

export default connect(mapStateToProps, actions)(goodsComponent);