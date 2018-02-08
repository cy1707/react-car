import React, {Component} from 'react'
import FootListComponent from '../../commonComponents/footList/footList'
import HeadSearchComponent from '../../commonComponents/headSearch/headSearch'

import CarListmainComponent from '../../commonComponents/carListmain/carListmain.js'




import './carList.scss'
export default class CarListComponent extends Component{
     state={
            
            // url:"http://10.3.136.50:88/allcar",
            switch:0,
            api:"http://10.3.136.50:88/allcar"
        }
     componentWillMount(){
       // console.log(666)
      

    }

     change(){
            
            this.refs.c2.changeUrl();

             if(this.state.switch==0){
                this.setState({ switch:1});
            }else{
                this.setState({ switch:0});
            } 
        }
    changeB(){
        
        this.refs.c2.changeBUrl();

         if(this.state.switch==0){
            this.setState({ switch:1});
        }else{
            this.setState({ switch:0});
        } 
    }
     changeC(){
        
        this.refs.c2.changeCUrl()

         
    }
     
      changeDisplay(){
          
             if(this.state.switch==0){
                this.setState({ switch:1});
            }else{
                this.setState({ switch:0});
            } 
        }
         changeDisplayB(e){
          
             if(this.state.switch==0){
                this.setState({ switch:2});
            }else{
                this.setState({ switch:0});
            } 

            switch(e.target.innerHTML){
                case '不限':
                
                      break;
                case '5万以下':
                     this.refs.c2.changeParams({low:0,high:5});
                      break;
                case '5-10万':
                      this.refs.c2.changeParams({low:5,high:10});
                      break;
                case '10-15万':
                      this.refs.c2.changeParams({low:10,high:15});
                      break;
                case '15-20万':
                      this.refs.c2.changeParams({low:15,high:20});
                      break;
                case '20万以上':
                      this.refs.c2.changeParams({low:20,high:1000});
                      break;
              
               


            }

        }
         changeDisplayC(){
          
             if(this.state.switch==0){
                this.setState({ switch:3});
            }else{
                this.setState({ switch:0});
            } 
        }
        carSearchdetail(id){
            hashHistory.push({
            pathname:'goods',
            query:{id:id}
            })
        }

    render(){
      let style;
      if(this.state.switch==0){
        style={
          display:"none"
        }

      } else if(this.state.switch==1){style={
          display:"block"
        }
     } 
     let styleB;
      if(this.state.switch==0){
        styleB={
          display:"none"
        }

      } else if(this.state.switch==2){styleB={
          display:"block"
        }
     } 
     let styleC;
      if(this.state.switch==0){
        styleC={
          display:"none"
        }

      } else if(this.state.switch==3){styleC={
          display:"block"
        }
     } 
        return (
            <div className="carList"> 

                <header className="head_Search">
                    <HeadSearchComponent/>
                </header>
                <div className="shuaixuan"> 
                    <ul className="ula">
                        <li className="zhineng" onClick={this.changeDisplay.bind(this)}>智能排序▼</li>
                        <li className="pai" onClick={this.changeDisplayC.bind(this)}>品牌▼</li>
                        <li className="jiage"  onClick={this.changeDisplayB.bind(this)}>价格▼</li>
                        <li className="baomc" onClick={this.changeC.bind(this)}>保卖车▼</li>
              
                    </ul>
                    <ul className="ulb" style={style} >
                        <li onClick={this.changeDisplay.bind(this)}>智能排序</li>
                        <li onClick={this.changeDisplay.bind(this)}>最新上架</li>
                        <li onClick={this.change.bind(this)}>价格最低</li>
                        <li onClick={this.changeB.bind(this)}>价格最高</li>
                        <li onClick={this.changeDisplay.bind(this)}>车龄最短</li>
                        <li onClick={this.changeDisplay.bind(this)}>里程最少</li>
                    </ul>
                     <div className="ulc" style={styleB} onClick={this.changeDisplayB.bind(this)}>
                       <div className="jiaqiana pa aa">不限</div>
                       <div className="jiaqianb pa bb">5万以下</div>
                       <div className="jiaqianc pa cc">5-10万</div>
                       <div className="jiaqiand pb aa">10-15万</div>
                       <div className="jiaqiane pb bb">15-20万</div>
                       <div className="jiaqianf pb cc">20万以上</div>
                      
                     </div>
                     
                </div>
                <div className="main">
                    <div className="pinpai" style={styleC} onClick={this.changeDisplayC.bind(this)}>
                           
                           <p>热门品牌</p>
                           
                           <ul className="remen">
                                <li><img src="https://image.guazistatic.com/files/brand/1207.png" alt="" />大众</li>
                                <li><img src="https://image.guazistatic.com/files/brand/1195.png" alt="" />丰田</li>
                                <li><img src="https://image.guazistatic.com/files/brand/1205.png" alt="" />福特</li>
                                <li><img src="https://image.guazistatic.com/files/brand/1202.png" alt="" />日产</li>
                                <li><img src="https://image.guazistatic.com/files/brand/1196.png" alt="" />本田</li>
                                
                             
                           </ul>
                           <ul className="remen">
                                <li><img src="https://image.guazistatic.com/files/brand/1198.png" alt="" />宝马</li>
                                <li><img src="https://image.guazistatic.com/files/brand/1206.png" alt="" />别克</li>
                                <li><img src="https://image.guazistatic.com/files/brand/1197.png" alt="" />奔驰</li>
                                <li><img src="https://image.guazistatic.com/files/brand/1208.png" alt="" />现代</li>
                                <li><img src="https://image.guazistatic.com/files/brand/1199.png" alt="" /> 奥迪</li>
                               
                             
                           </ul>
                           <ul className="zimu">
                               
                               <li><p>A</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1199.png" alt="" /><i> 奥迪</i></li>
                               <li><p>B</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1198.png" alt="" /><i>宝马</i></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1206.png" alt="" /><i>别克</i></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1196.png" alt="" /><i>本田</i></li>
                               <li><p>C</p></li>
                                <li><img src="https://image.guazistatic.com/files/brand/103772.png" alt="" /><i>传祺</i></li>
                                <li><img src="https://image.guazistatic.com/files/brand/1227.png" alt="" /><i>长安</i></li>
                               <li><p>D</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1207.png" alt="" /><i>大众</i></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1230.png" alt="" /><i>东风</i></li>
                              
                               <li><p>F</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1205.png" alt="" /><i>福特</i></li>
                               <li><p>G</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1260.png" alt="" /><i>广汽</i></li>
                               <li><p>H</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/103778.png" alt="" /><i>哈弗</i></li>
                               
                               <li><p>J</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1200.png" alt="" /><i>吉利</i></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1264.png" alt="" /><i>江淮</i></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1216.png" alt="" /><i>吉普</i></li>
                               <li><p>K</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1268.png" alt="" /><i>凯迪拉克</i></li>
                               <li><p>L</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1209.png" alt="" /><i>铃木</i></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1278.png" alt="" /><i>雷克萨斯</i></li>
                               
                               <li><p>N</p></li>
                                <li><img src="https://image.guazistatic.com/files/brand/2271.png"  alt="" /><i>纳智捷</i></li>
                             
                               <li><p>Q</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1292.png"  alt="" /><i>起亚</i></li>
                               <li><p>R</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1202.png" alt="" /><i>日产</i></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1293.png" alt="" /><i>荣威</i></li>
                               <li><p>S</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1294.png" alt="" /><i>斯巴鲁</i></li>
                              
                               <li><p>W</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1203.png" alt="" /><i>沃尔沃</i></li>
                               <li><p>X</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1208.png" alt="" /><i>现代</i></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1307.png"  alt="" /><i>雪佛兰</i></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1213.png" alt="" /><i>雪铁龙</i></li>
                               <li><p>Y</p></li>
                               <li><img src="https://image.guazistatic.com/files/brand/1310.png" alt="" /><i>英菲尼迪</i></li>
                               
                           
                           
                           </ul>
                    </div>
                    <CarListmainComponent ref="c2" api={this.state.api}/>


                   
                </div>
                <footer className="foot_List">
                    <FootListComponent/>
                </footer>
               
               
          </div>
        )
    }
}