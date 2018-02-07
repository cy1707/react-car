import React,{Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import './carRecommend.scss'

export default class CarRecommendComponent extends Component{
   
    componentDidMount(){
        console.log(this.props.api);
        var carRandom = [];
        axios.get(this.props.api).then(function(res){
            // 随机显示6个
            // var carRandom = [];

            var carsList = res.data.data.results;
            var len = res.data.data.results.length;
            var idx = [];
            for(var i=0;i<6;i++){
                idx.push(parseInt(Math.random()*len));
                carRandom.push(carsList[idx[i]]);
            } 
        });
        
    }
    getCars(){
        console.log(this.props.api);
        var carRandom = [];
        axios.get(this.props.api).then(function(res){
            // 随机显示6个
            var carRandom = [];
            var carsList = res.data.data.results;
            var len = res.data.data.results.length;
            var idx = [];
            for(var i=0;i<6;i++){
                idx.push(parseInt(Math.random()*len));
                carRandom.push(carsList[idx[i]]);
            }
          
            console.log(carRandom);
           
        });
    }
    render(){
        
        return (
            <div>
            
                <ul className="carRecommendList">
                    <li>
                        <div className="carRecommendList_l">
                            <img src=""/>    
                        </div>
                        <div className="carRecommendList_r">
                            <a className="aa">日产骐达 2008款 1.6L 自动智能型</a>
                            <div className="carRecommendList_rc">
                                <span>2009年/</span>
                                <span>16.5万公里</span>
                            </div>
                            <div className="carRecommendList_rb">
                                <span>5万</span>
                                <a>新车价<s>20.15万</s></a>
                            </div>
                        </div>
                    </li>
                </ul>
            
            </div>
        )
    }
}

