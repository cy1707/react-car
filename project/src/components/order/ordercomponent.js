import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import   './order.scss'

import * as actions from './orderAction'

 class orderComponent extends Component{

    car(){
        var params = {
            brand:this.refs.o1.value,
            license_shijian:this.refs.o2.value,
            mileage:this.refs.o3.value,
            license_area:this.refs.o4.value,
            car_status:this.refs.o5.value
        }

        this.props.caring(params).then(res => {
            console.log(res);
            
            
        });


    }

    render(){
        return (
              <div id="o_box">
                  <div className="g_header">
                    <Link to="/sell"><span className="back">&lt;</span></Link>
                    <h1>车况</h1>
                  </div>
                  <div className="stepbox">
                      <ul className="ul_1">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                      </ul>
                      <ul className="ul_2">
                          <li><span>填写手机号</span></li>
                          <li><span>完善爱车信息</span></li>
                          <li><span>填写验车时间地点</span></li>
                      </ul>
                  </div>
                  <div className="green_blank"></div>
                  <div className="filter_form">
                        <div className="form_group">
                            <span>品牌</span>
                            <input type="text" placeholder="请填写品牌" ref="o1"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>上牌时间</span>
                            <input type="data" placeholder="请填写上牌时间" ref="o2"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>行驶里程</span>
                            <input type="text" placeholder="请填写里程数(单位:万里)" ref="o3"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>牌照所在地</span>
                            <input type="text" placeholder="请填写牌照所在地(城市)" ref="o4"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>车况</span>
                            <input type="text" placeholder="请车况填写" ref="o5"/ ><i></i>
                        </div>
                        
                        <div className="wechat">
                            <span></span>关注瓜子微信公众号，实时查看卖车进度
                        </div>
                  </div>
                  <div className="btn-fixed">
                      <Link to="/mine">
                      <div className="btn11" onClick={this.car.bind(this)}>提交</div>
                      </Link>
                  </div>
              </div>

        )
    



}

}

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.order.status,
        ajaxResult: state.order.result || []
    }
}

export default connect(mapStateToProps, actions)(orderComponent);