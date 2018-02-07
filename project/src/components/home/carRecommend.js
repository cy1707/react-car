import React,{Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import './carRecommend.scss'
import * as actions from './carRecommendAction'

class CarRecommendComponent extends Component{
//    state = {
//        car : []
//     }
    componentWillMount(){
        // console.log(this.props.api);
        // axios.get(this.props.api).then((res)=>{
        //     var carsList = res.data.data.results;
        //     carsList = carsList.slice(0,6)
        //     this.setState({car:carsList})
        //     console.log(this.state.car)            
        // });
        // this.props.goodsCarList();
        const len = this.props.api.split('/').length;
        console.log(this.props.api.split('/')[len-1])
        const data = this.props.api.split('/')[len-1];
        // var api = this.props.api.
        this.props.addCart(data);
    }
    getCars(){
        
        console.log(666);
        // axios.get(this.props.api).then((res)=>{
        //     var carsList = res.data.data.results;
        //     carsList = carsList.slice(0,6)
        //     this.setState({car:carsList})
        //     console.log(this.state.car)            
        // });

    }
    render(){
        
        return (
            <div>
                 {
                    this.props.ajaxResult.slice(0,6).map( item => {
                        return (
                            <ul className="carRecommendList" key={item.id}>
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

let mapStateToProps = (state) => {
    console.log('component的',state.carRecommend.result)
    return {
        ajaxStatus: state.carRecommend.status,
        ajaxResult: state.carRecommend.result || []
    }
}

export default connect(mapStateToProps, actions)(CarRecommendComponent);
