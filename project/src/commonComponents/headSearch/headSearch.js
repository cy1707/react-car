import React, {Component} from 'react'

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
                        <div className="ui disabled icon input">
                            <i className="search icon"></i>
                            <input type="text" placeholder="搜索您想要的车" />
                        </div>
                    </li>
                    <li className = "headListc_r">
                        <i className="comment icon"></i>
                    </li>
                </ul>
                
            </div>
        )
    }
}