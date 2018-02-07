import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import './buyOrder.scss'
import * as actions from './buyOrderAction'

class BuyOrderComponent extends Component{
    componentWillMount(){

        var userId = window.localStorage.username;
        console.log(userId);
        this.props.recommend(userId);
    }
    render(){
        return (
            <div className="buyorderPage">
                <div className="buyorder_head">
                    <Link to="/mine"><i className="angle left icon"></i></Link>
                    买车订单
                </div>
                
                <div className="buyorder_main">
                    {
                        this.props.ajaxResult.map( item => {
                            return (
                                <ul className="buyorder_c" key={item.order_id}>
                                    <li>
                                        <p>订单编号:{item.order_id}</p>
                                        <div className="buyorder_cl">
                                            <img src={item.imgurl}/>
                                        </div>
                                        <div className="buyorder_cr">
                                            <a className="buyorder_crt">{item.car_name}</a>
                                            <div className="buyorder_crc">
                                                <span>{
                                                    item.license_time.slice(0,4)
                                                }年/</span>
                                                <span>{item.mileage}万公里</span>
                                            </div>
                                            <div className="buyorder_crb">
                                                <span>{item.oprice}万</span>
                                            </div>
                                        </div>
                                        <div className="buyorder_cb">
                                            <button className="giveupBtn">放弃交易</button>
                                            <button className="payBtn">确认付款</button>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    console.log('buyOrder的',state.carRecommend.result)
    return {
        ajaxStatus: state.buyorder.status,
        ajaxResult: state.buyorder.result || []
    }
}

export default connect(mapStateToProps, actions)(BuyOrderComponent);