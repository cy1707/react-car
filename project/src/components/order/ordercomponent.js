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
              </div>

        )
    }



}