import React, {Component} from 'react'


import FootListComponent from '../../commonComponents/footList/footList'

export default class CarListComponent extends Component{
    render(){
        return (
            <div> 
                <div>CarListComponent</div>
                <h3>列表页</h3>
               
                <FootListComponent/>
                
                
            </div>
        )
    }
}