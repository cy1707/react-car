import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import * as actions from './messAction'
import {Link} from 'react-router'



import   './mess.scss'

 class messComponent extends Component{
    look(){
        console.log(this.refs.m1.value);
        var params = {
            username:this.refs.m1.value,
            phone:this.refs.m2.value,
            test_area:this.refs.m3.value,
            test_time:this.refs.m4.value
        }

        this.props.looking(params).then(res => {
            console.log(res);
            
            
        });
    }

    render(){
        return(
            <div id="m_box">
                    <div className="m_head">
                        <h1>预约看车信息</h1>
                    </div>  
                     <div className="filter_form">
                        <div className="form_group">
                            <span>姓名</span>
                            <input type="text" placeholder="请填写姓名" ref="m1"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>手机号</span>
                            <input type="data" placeholder="请选择手机号" ref="m2"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>验车地点</span>
                            <input type="text" placeholder="验车地点" ref="m3"/><i></i>
                        </div>
                        <div className="form_group">
                            <span>验车时间</span>
                            <input type="text" placeholder="请填写验车时间" ref="m4"/><i></i>
                        </div>
                        <Link to="/home">
                        <div className="button1" onClick={this.look.bind(this)}>
                            提交信息
                        </div>
                        </Link>
                        
                  </div>

            </div>      
        )
    }





}


let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.mess.status,
        ajaxResult: state.mess.result || []
    }
}

export default connect(mapStateToProps, actions)(messComponent);