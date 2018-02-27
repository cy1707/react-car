import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import   './sellorder.scss'

import * as actions from './sellorderAction'

class sellorderComponent extends Component{
        
        componentWillMount(){
            this.props.order().then(res => {
                console.log(res);
            
            });
        }

        render(){
            return (
                    <div id="smallbox">
                        <div id="o_header">
                        <Link to="/home"><span className="back">&lt;</span></Link>
                            <h1>卖车订单</h1>
                        </div>
                        <div className="center">
                        {
                            this.props.ajaxResult.map( item => {
                                return (
                                    <ul className="carRecommendList" key={item.id} >
                                        <li>
                                            <div className="carRecommendList_l">
                                                <img src={
                                                    item.imgurl.split(',')[0]
                                                }/>
                                                
                                            </div>
                                            <div className="carRecommendList_r">
                                                <a className="aa">{item.brand}</a>
                                                <div className="carRecommendList_rc">
                                                    
                                                    里程:<span>{item.mileage}万公里</span>
                                                </div>
                                                <div className="carRecommendList_rb">
                                                    车况：<span>{item.car_status}</span>
                                                </div>
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
    return {
        ajaxStatus: state.sellorder.status,
        ajaxResult: state.sellorder.result || []
    }
}

export default connect(mapStateToProps, actions)(sellorderComponent);