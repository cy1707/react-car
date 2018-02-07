import React, {Component} from 'react'
import {connect} from 'react-redux'

import   './order.scss'

export default class orderComponent extends Component{

    render(){
        return (
              <div id="o_box">

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
                            <span>品牌车系</span>
                            <input type="text" placeholder="请选择品牌车系>"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>上牌时间</span>
                            <input type="text" placeholder="请选择上牌时间>"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>行驶里程</span>
                            <input type="text" placeholder="请填写里程数>"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>牌照所在地</span>
                            <input type="text" placeholder="请选择牌照所在地>"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>车况</span>
                            <input type="text" placeholder="请选择车况>"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>后续计划</span>
                            <input type="text" placeholder="后续计划>"/><i></i>
                        </div>
                        <div className="wechat">
                            <span></span>关注瓜子微信公众号，实时查看卖车进度
                        </div>
                  </div>

              </div>

        )
    }



}