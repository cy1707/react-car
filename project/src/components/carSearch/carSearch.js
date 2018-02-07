import React, {Component} from 'react'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import './carSearch.scss'
import * as actions from './carSearchAction'

class CarSearchComponent extends Component{
    // 模糊搜索
    searchCars(){

        const searchInput = document.querySelector('.searchInput').value;
        
        this.props.searchCar(searchInput);
        
    }
    // 点击跳转详情页
    carSearchdetail(id){
        hashHistory.push({
            pathname:'goods',
            query:{id:id}
        })
    }
    render(){
        return (
            <div className="carSearchPage">
                <div className="carsearch_head">
                    <i className="search icon"></i>
                    <input type="text" onChange={this.searchCars.bind(this)} className="searchInput"/>
                    <Link to="/home">取消</Link>
                </div>
                <div className="carsearch_main">
                    <ul className="carsearch_main_results">
                        {
                            this.props.ajaxResult.map( item => {
                                return (
                                    <li id={item.id} key={item.id} onTouchStart={this.carSearchdetail.bind(this,item.id)}><a>{item.name}</a></li>
                                )
                            })
                        }
                       
                    </ul>
                    <div className="carsearch_main_hot">
                        <p>热门搜索</p>
                        <div>大众</div>
                        <div>polo</div>
                        <div>奥迪Q3</div>
                        <div>面包车</div>
                        <div>五菱宏光</div>
                        <div>北京牌照</div>
                        <div>1.5T</div>
                        <div>七座</div>
                        <div>四驱</div>
                    </div>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    // console.log('component的',state.carSearch.result)
    return {
        ajaxStatus: state.carSearch.status,
        ajaxResult: state.carSearch.result || []
    }
}

export default connect(mapStateToProps, actions)(CarSearchComponent);