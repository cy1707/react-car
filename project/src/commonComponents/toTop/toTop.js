import React,{Component} from 'react'

import './toTop.scss'

export default class BackTopComponent extends Component{
    componentDidMount() {
        window.onscroll = function () {
            // 变量t就是滚动条滚动时，到顶部的距离
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(t)
            const top_view = document.getElementById('top_view');
            if (top_view !== null) {
                top_view.style.display = t >= 100 ? 'block' : 'none';
            }
        };
    }
    // 返回顶部
    scrollToTop = () =>{
        console.log(6789)
        window.scrollTo(0, 0);
    }
    render(){
        return (
            
            <div id="top_view" onTouchStart={this.scrollToTop} className="back-top">
                <img src="./project/src/img/toTop.jpg"/>
            </div>
            
        )
    }
}