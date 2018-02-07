import React from 'react'
import {Route} from 'react-router'

import RootComponent from '../components/root/root'
import HomeComponent from '../components/home/home'
import ProlistComponent from '../components/prolist/prolistComponent'
import CarListComponent from '../components/carlist/carList'
import SellCarComponent from '../components/sellCar/sellCar'
import MineComponent from '../components/mine/mine'
import sellComponent from '../components/sell/sellcomponent'
import orderComponent from '../components/order/ordercomponent'
import goodsComponent from '../components/goods/goodscomponent'



const routes = (
    <Route path="/" component={RootComponent}>
        <Route path="home" component={HomeComponent}/>    
        <Route path="prolist" component={ProlistComponent}/>
        <Route path="carlist" component={CarListComponent}/>    
        <Route path="sellcar" component={SellCarComponent}/>
        <Route path="mine" component={MineComponent}/>
        <Route path="sell" component={sellComponent}/>
        <Route path="order" component={orderComponent}/>
        <Route path="goods" component={goodsComponent}/>    
    </Route>
)

export default routes;