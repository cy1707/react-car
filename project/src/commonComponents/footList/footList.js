import React,{Component} from 'react'
import {Link} from 'react-router'

import './footList.scss'

export default class FootListComponent extends Component{
    render(){
        return (
            <div>
                <ul className="footNav">
                    <Link to="/home">
                        <li>
                            <i className="home icon active"></i>
                            <p className="active">首页</p>
                        </li>
                    </Link>
                    <Link to="/carlist">
                        <li>
                            <i className="car icon"></i>
                            <p>买车</p>
                        </li>
                    </Link>
                    <Link to="/sell">
                        <li>
                            <i className="announcement icon"></i>
                            <p>卖车</p>
                        </li>
                    </Link>
                    <Link to="/mine">
                        <li>
                            <i className="user icon"></i>
                            <p>我的</p>
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}