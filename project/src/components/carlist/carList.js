import React, {Component} from 'react'
import FootListComponent from '../../commonComponents/footList/footList'
import HeadSearchComponent from '../../commonComponents/headSearch/headSearch'

import CarListmainComponent from '../../commonComponents/carListmain/carListmain.js'




import './carList.scss'
export default class CarListComponent extends Component{
     componentWillMount(){
       console.log(666)
       
        
     


    }
      state={
        switch:0
        
      }
     
      changeDisplay(){
          
             if(this.state.switch==0){
                this.setState({ switch:1});
            }else{
                this.setState({ switch:0});
            } 
        }
         changeDisplayB(){
          
             if(this.state.switch==0){
                this.setState({ switch:2});
            }else{
                this.setState({ switch:0});
            } 
        }
         changeDisplayC(){
          
             if(this.state.switch==0){
                this.setState({ switch:3});
            }else{
                this.setState({ switch:0});
            } 
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
                        <li className="baomc">保卖车▼</li>
              
                    </ul>
                    <ul className="ulb" style={style}>
                        <li>智能排序</li>
                        <li>最新上架</li>
                        <li>价格最低</li>
                        <li>价格最高</li>
                        <li>车龄最短</li>
                        <li>里程最少</li>
                    </ul>
                     <div className="ulc" style={styleB}>
                       <div className="jiaqiana pa aa">不限</div>
                       <div className="jiaqianb pa bb">3万以下</div>
                       <div className="jiaqianc pa cc">3-5万</div>
                       <div className="jiaqiand pb aa">5-7万</div>
                       <div className="jiaqiane pb bb">7-9万</div>
                       <div className="jiaqianf pb cc">9-12万</div>
                       <div className="jiaqiang pc aa">12-16万</div>
                       <div className="jiaqianh pc bb">16-20万</div>
                       <div className="jiaqiani pc cc">20万以上</div>
                     </div>
                     
                </div>
                <div className="main">
                 <div className="pinpai" style={styleC} >
                         
                         <p>热门品牌</p>
                         
                         <ul className="remen">
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1207.png" alt="" />大众</a></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1195.png" alt="" />丰田</a></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1205.png" alt="" />福特</a></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1202.png" alt="" />日产</a></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1196.png" alt="" />本田</a></li>
                              
                           
                         </ul>
                         <ul className="remen">
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1198.png" alt="" />宝马</a></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1206.png" alt="" />别克</a></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1197.png" alt="" />奔驰</a></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1208.png" alt="" />现代</a></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1199.png" alt="" /> 奥迪</a></li>
                             
                           
                         </ul>
                         <ul className="zimu">
                             
                             <li><p>A</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1199.png" alt="" /><i> 奥迪</i></a></li>
                             <li><p>B</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1198.png" alt="" /><i>宝马</i></a></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1206.png" alt="" /><i>别克</i></a></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1196.png" alt="" /><i>本田</i></a></li>
                             <li><p>C</p></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/103772.png" alt="" /><i>传祺</i></a></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1227.png" alt="" /><i>长安</i></a></li>
                             <li><p>D</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1207.png" alt="" /><i>大众</i></a></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1230.png" alt="" /><i>东风</i></a></li>
                            
                             <li><p>F</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1205.png" alt="" /><i>福特</i></a></li>
                             <li><p>G</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1260.png" alt="" /><i>广汽</i></a></li>
                             <li><p>H</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/103778.png" alt="" /><i>哈弗</i></a></li>
                             
                             <li><p>J</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1200.png" alt="" /><i>吉利</i></a></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1264.png" alt="" /><i>江淮</i></a></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1216.png" alt="" /><i>吉普</i></a></li>
                             <li><p>K</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1268.png" alt="" /><i>凯迪拉克</i></a></li>
                             <li><p>L</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1209.png" alt="" /><i>铃木</i></a></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1278.png" alt="" /><i>雷克萨斯</i></a></li>
                             
                             <li><p>N</p></li>
                              <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/2271.png"  alt="" /><i>纳智捷</i></a></li>
                           
                             <li><p>Q</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1292.png"  alt="" /><i>起亚</i></a></li>
                             <li><p>R</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1202.png" alt="" /><i>日产</i></a></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1293.png" alt="" /><i>荣威</i></a></li>
                             <li><p>S</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1294.png" alt="" /><i>斯巴鲁</i></a></li>
                            
                             <li><p>W</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1203.png" alt="" /><i>沃尔沃</i></a></li>
                             <li><p>X</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1208.png" alt="" /><i>现代</i></a></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1307.png"  alt="" /><i>雪佛兰</i></a></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1213.png" alt="" /><i>雪铁龙</i></a></li>
                             <li><p>Y</p></li>
                             <li><a  className=" " href="#"><img src="https://image.guazistatic.com/files/brand/1310.png" alt="" /><i>英菲尼迪</i></a></li>
                             
                         
                         
                         </ul>
                 </div>
                  <CarListmainComponent/>


                   
                </div>
                <footer className="foot_List">
                    <FootListComponent/>
                </footer>
               
               
          </div>
        )
    }
}