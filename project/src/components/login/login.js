import React, {Component} from 'react'
import {Link} from 'react-router'

import './login.scss'


export default class LoginComponent extends Component{
    componentDidMount(){
        this.Code();
    }
    Code(){
        var span = document.querySelector('.yzCode');
        // 生成验证码
        var num = [];
        for(var j=0;j<4;j++){
            num.push(parseInt(Math.random()*10));
        }
        var strnum = num.join('');
        span.innerHTML = strnum;
    }
    // 验证登录
    phoneNum(e){
        console.log(e.target.value);
        var sMobile = e.target.value;
        var i = document.querySelector('#jurge');
        if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(sMobile))){ 
            i.className = 'remove circle icon';
            i.style.color = 'red';
            e.target.value = '';
            e.target.focus(); 
        }else{
            i.className = 'check circle icon';
            i.style.color = 'green'
        }
    }
    // 验证码验证
    yzCode(e){
        var span = document.querySelector('.yzCode');
        var i = document.querySelector('#codeYz');
        if(e.target.value == span.innerHTML){
            i.className = 'check circle icon';
            i.style.color = 'green'
        }else{
            i.className = 'remove circle icon';
            i.style.color = 'red';
            e.target.value = '';
            this.Code();
        }
        
    }
    createCode(){
        this.Code();
    }   
    // 点击登录
    loginGo(e){
        var phoneI = document.querySelector('#jurge');
        var yzCodeI = document.querySelector('#codeYz');
        console.log(phoneI.className,yzCodeI.className)
        if(phoneI.className == 'check circle icon' && yzCodeI.className == 'check circle icon'){
            // console.log(document.querySelector('.username'))
            // 把用户名存入localstorage里面
            window.localStorage.username = document.querySelector('.username').value;
            location.href = 'http://localhost:888/#/home';
        }
    }
    render(){
        return (
            <div className="loginPage">
                <div className="login_head">
                    <Link to="/mine"><i className="remove icon"></i></Link>
                </div>
                <div className="login_main">
                    <a>登录瓜子</a>
                    <p>无需注册，输入手机号即可登录</p>
                    <div>
                        <input type="text" placeholder ="手机号码" onBlur={this.phoneNum.bind(this)} className="username"/>
                        <i id="jurge"></i>
                        <input type="text" placeholder ="输入验证码" onBlur={this.yzCode.bind(this)}/>
                        <span className="yzCode" onTouchStart = {this.createCode.bind(this)}></span>
                        <i id="codeYz"></i>
                        <button className="loginBtn" onTouchStart={this.loginGo.bind(this)}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}