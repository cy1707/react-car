import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from './prolistAction'

class ProlistComponent extends Component{
    componentWillMount(){
        this.props.getGoods()
    }

    addCart(proItem){
        this.props.addCart(proItem.gid).then(res => {
            console.log(res);
        });
    }

    render(){
        return (
            <div>
                {
                    this.props.ajaxResult.map( item => {
                        return (
                            <ul key={item.gid}>
                                <li>{item.name}</li>
                                <li>
                                    {
                                        item.smallImage.split(',').map((simg, idx) => {
                                            return <img key={idx} src={simg} />
                                        })
                                    }
                                </li>
                                <li><input type="button" value="加入购物车" onClick={this.addCart.bind(this, item)}/></li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
} 
//store.getSate() => state
let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.prolist.status,
        ajaxResult: state.prolist.result || []
    }
}

export default connect(mapStateToProps, actions)(ProlistComponent);