import React,{Component} from 'react'
import {Link} from 'react-router'

import './buyOrder.scss'

export default class BuyOrderComponent extends Component{
    render(){
        return (
            <div className="buyorderPage">
                <div className="buyorder_head">
                    <Link to="/mine"><i className="angle left icon"></i></Link>
                    买车订单
                </div>
                
                <div className="buyorder_main">
                    <ul className="buyorder_c">
                        <li>
                            <p>订单编号:</p>
                            <div className="buyorder_cl">
                                <img src=""/>
                            </div>
                            <div className="buyorder_cr">
                                <a className="buyorder_crt">丰田凯美瑞 2013款 2.0G 舒适版</a>
                                <div className="buyorder_crc">
                                    <span>2009年/</span>
                                    <span>16.5万公里</span>
                                </div>
                                <div className="buyorder_crb">
                                    <span>5万</span>
                                </div>
                            </div>
                            <div className="buyorder_cb">
                                <button className="giveupBtn">放弃交易</button>
                                <button className="payBtn">确认付款</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}