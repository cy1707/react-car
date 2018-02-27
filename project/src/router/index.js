import React from 'react'
import {Route} from 'react-router'

import RootComponent from '../components/root/root'
import HomeComponent from '../components/home/home'
import ProlistComponent from '../components/prolist/prolistComponent'
import CarListComponent from '../components/carlist/carList'
import MineComponent from '../components/mine/mine'
import LoginComponent from '../components/login/login'
import CarSearchComponent from '../components/carSearch/carSearch'
import sellComponent from '../components/sell/sellcomponent'
import orderComponent from '../components/order/ordercomponent'
import buyorderComponent from '../components/buyOrder/buyOrder'
import goodsComponent from '../components/goods/goodscomponent'
import messComponent from '../components/mess/messcomponent'
import sellorderComponent from '../components/sellorder/sellordercomponent'



const routes = (
    <Route path="/" component={RootComponent}>
        <Route path="home" component={HomeComponent}/>    
        <Route path="prolist" component={ProlistComponent}/>
        <Route path="carlist" component={CarListComponent}/>    
        <Route path="mine" component={MineComponent}/>
        <Route path="login" component={LoginComponent}/>
        <Route path="search" component={CarSearchComponent}/>     
        <Route path="sell" component={sellComponent}/>
        <Route path="order" component={orderComponent}/> 
        <Route path="buyorder" component={buyorderComponent}/>   
        <Route path="goods" component={goodsComponent}/>  
        <Route path="mess" component={messComponent}/>     
        <Route path="sellorder" component={sellorderComponent}/>   
    </Route>
)

export default routes;