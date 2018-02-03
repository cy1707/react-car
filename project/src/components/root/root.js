import React, {Component} from 'react'

import './root.scss'

export default class RootComponent extends Component{
    render(){
        return (
            <div className="rootDiv"> 
                <div className="outDiv">{this.props.children}</div>
            </div>
        )
    }
}