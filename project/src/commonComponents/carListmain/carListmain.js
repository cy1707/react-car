import React,{Component} from 'react'
import axios from 'axios'
import {Link,hashHistory} from 'react-router'

import './carListmain.scss'

export default class CarListmainComponent extends Component{
    state={
        data:[],
        url:"http://10.3.136.50:88/allcar"
    }
    componentWillMount(){
        console.log(this.state)
        this.getCart(this.state.url);
        console.log('组件的',this.props.api)
        // console.log('组件的',location.href.split('?').length)
        if(location.href.split('?').length == 1){
            axios.get(this.props.api).then((res)=>{
                // console.log(res)
                 this.setState({data:res.data.data.results}) 
            //    console.log(this.state.data)        
            });
        }else if(location.href.split('?').length == 2){
            var api = location.href.split('?')[1].split('&');
            if(api.length == 1){
                var _n = api[0].split('=')[1];
                axios.get("http://10.3.136.50:88/classify",{params:{n:_n}}).then((res)=>{ 
                    this.setState({data:res.data.data.results})      
                });
            }else if(api.length == 2){
                var _high = api[0].split('=')[1];
                var _low = api[1].split('=')[1];
                // console.log("我的",api,_high,_low)
                axios.get('http://10.3.136.50:88/scope',{params:{high:_high,low:_low}}).then((res)=>{
                    // console.log(res)
                    this.setState({data:res.data.data.results}) 
                //    console.log(this.state.data)        
                });
            }
            
            
        }

    }

    getCart(_url){
        axios.get(_url).then((res)=>{
            // console.log(res)
            this.setState({data:res.data.data.results}) 
            // console.log(this.state.data)        
        });
    }
    changeUrl(){
        this.setState({url:"http://10.3.136.50:88/sortlow"},function(){
            console.log(this.state)
            this.getCart(this.state.url);
        });
        

    }

        changeBUrl(){
        this.setState({url:"http://10.3.136.50:88/sorthigh"},function(){
            console.log(this.state)
            this.getCart(this.state.url);
        });
    

    }
        changeCUrl(){
        this.setState({url:"http://10.3.136.50:88/baomai"},function(){
            console.log(this.state)
            this.getCart(this.state.url);
        });
    

    }
    carSearchdetail(id){
            hashHistory.push({
            pathname:'goods',
            query:{id:id}
            })
        }
    changeParams(b){
        let self=this;
        axios.get("http://10.3.136.50:88/scope",{params:b}).then(function(res){
            console.log(res)
                self.setState({data:res.data.data.results})
        })
    }
    render(){
         console.log(this.state.data) 
       return (
              <div>
                     {
                        this.state.data.slice(0,56).map( item => {
                            return (
                                <ul className="carRecommendList" key={item.id}>
                                   
                                    <li onClick={this.carSearchdetail.bind(this,item.id)}>
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
                                                <span className="wan">{item.oprice}万</span>
                                                <a>新车价<s>{item.nprice}万</s></a>
                                                <span className="diqu">{item.car_area}</span>
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