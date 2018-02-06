import React from 'react'
import {Route} from 'react-router'

import RootComponent from '../components/root/root'
import HomeComponent from '../components/home/home'
import ProlistComponent from '../components/prolist/prolistComponent'
import CarListComponent from '../components/carlist/carList'
import SellCarComponent from '../components/sellCar/sellCar'
import MineComponent from '../components/mine/mine'
import LoginComponent from '../components/login/login'
import CarSearchComponent from '../components/carSearch/carSearch'

const routes = (
    <Route path="/" component={RootComponent}>
        <Route path="home" component={HomeComponent}/>    
        <Route path="prolist" component={ProlistComponent}/>
        <Route path="carlist" component={CarListComponent}/>    
        <Route path="sell" component={SellCarComponent}/>
        <Route path="mine" component={MineComponent}/>
        <Route path="login" component={LoginComponent}/>
        <Route path="search" component={CarSearchComponent}/>     
    </Route>
)

export default routes;