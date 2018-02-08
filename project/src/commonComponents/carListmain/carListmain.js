import React,{Component} from 'react'
import axios from 'axios'
import {Link,hashHistory} from 'react-router'

import './carListmain.scss'

export default class CarListmainComponent extends Component{
        state={
            data:[]
        }
    componentWillMount(){
      axios.get("http://10.3.136.50:88/allcar").then((res)=>{
          console.log(res)
           this.setState({data:res.data.data.results}) 
         console.log(this.state.data)        
        });
        

    }
    carSearchdetail(id){
            hashHistory.push({
            pathname:'goods',
            query:{id:id}
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