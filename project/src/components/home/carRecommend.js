import React,{Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {hashHistory} from 'react-router'

import './carRecommend.scss'
// import * as actions from './carRecommendAction'

 export default class CarRecommendComponent extends Component{
    state = {
       car : []
    }
    componentWillMount(){
        console.log('api',this.props.api)
        axios.get(this.props.api).then(res=>{
            console.log(res.data.data.results.slice(0,6));
            this.setState({car:res.data.data.results.slice(0,6)})
        })
    }
    A(){
        // const len = this.props.api.split('/').length;
        // const data = this.props.api.split('/')[len-1];
        // this.props.addCart(data);
        console.log("Tab666的",this.props.api)
        axios.get(this.props.api).then(res=>{
            console.log(res.data.data.results.slice(0,6));
            this.setState({car:res.data.data.results.slice(0,6)})
        })
        console.log("Tab的666");

    }
    // 点击跳转详情页
    cardetail(id){
        hashHistory.push({
            pathname:'goods',
            query:{id:id}
        })
    }
    render(){
        return (
            <div>
                 {
                    this.state.car.map( item => {
                        return (
                            <ul className="carRecommendList" key={item.id} onTouchStart={this.cardetail.bind(this,item.id)}>
                                <li>
                                    <div className="carRecommendList_l">
                                        <img src={
                                            item.imgurl.split(',')[0]
                                        }/>
                                        
                                    </div>
                                    <div className="carRecommendList_r">
                                        <a className="aa">{item.name}</a>
                                        <div className="carRecommendList_rc">
                                            <span>
                                                {
                                                    item.license_time.slice(0,4)
                                                }
                                                年/
                                            </span>
                                            <span>{item.mileage}万公里</span>
                                        </div>
                                        <div className="carRecommendList_rb">
                                            <span>{item.oprice}万</span>
                                            <a>新车价<s>{item.nprice}万</s></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        )
                     })
                 }
               
            </div>
        )
    }
}

// let mapStateToProps = (state) => {
//     console.log('Tabcomponent的',state.carRecommend.result)
//     return {
//         ajaxStatus: state.carRecommend.status,
//         ajaxResult: state.carRecommend.result || []
//     }
// }

// export default connect(mapStateToProps, actions)(CarRecommendComponent);
