import React, {Component} from 'react'
import {Link} from 'react-router'

import './headSearch.scss'

export default class HeadSearchComponent extends Component{
    render(){
        return (
            <div className="headListc"> 
                <ul>
                    <li className = "headListc_l">
                        <span className = "currentCity">广州</span>
                        <i className="angle down icon"></i>
                    </li>
                    <li className = "headListc_c">
                        <Link to="/search">
                            <i className="search icon"></i>
                            <input type = "text" placeholder="搜索您想要的车" className="inputsearch"/>
                        </Link>
                    </li>
                    <li className = "headListc_r">
                        <i className="comment icon"></i>
                    </li>
                </ul>
                
            </div>
        )
    }
}