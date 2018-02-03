import React, {Component} from 'react'

import FootListComponent from '../../commonComponents/footList/footList'
import HeadSearchComponent from '../../commonComponents/headSearch/headSearch'
import './home.scss'

export default class HomeComponent extends Component{
    render(){
        return (
            <div className="homePage"> 
                <header className="head_Search">
                    <HeadSearchComponent/>
                </header>
                <div className="main">
                    <a>哈哈</a>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                </div>
                <footer className="foot_List">
                    <FootListComponent/>
                </footer>
            </div>
        )
    }
}