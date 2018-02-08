import React,{Component} from 'react'

import './banner.scss'

export default class BannerComponent extends Component{
    carouselFun(param){
        console.log(param);
        var carousel = param.carousel;
        var list = $(carousel).children("li");
        var indexContainer = param.indexContainer;
        var prev = param.prev;
        var next = param.next;
        var timing = param.timing;
        var animateTime = param.animateTime;
        var auto = param.auto;
        var timer;
        for(var i = 1;i <= list.length;i++){
            $(indexContainer).append("<li>"+i+"</li>")
        }
        
        var indexList = $(indexContainer).children("li");
        $(list[0]).addClass("on").show(animateTime);
        $(indexList[0]).addClass("index")
        // 执行
        if(auto){
            startTiming();
        }

        /*开始计时方法*/
        function startTiming(){
            timer = setInterval(switchImg,timing);
        };

        $(prev).off("touchstart").on("touchstart",function(){
            var on = $(carousel).children(".on");
            on.stop(true,true).hide(animateTime).removeClass("on");
            if(on.prev().is("li")){
                switchIndex($(carousel).children("li").index(on.prev()));
                on.prev().stop(true,true).addClass("on").delay(animateTime/2).show(animateTime);
            }else{
                switchIndex($(carousel).children("li").index(list[list.length-1]));
                $(list[list.length-1]).stop(true,true).addClass("on").delay(animateTime/2).show(animateTime);
            }

        });
        $(next).off("touchstart").on("touchstart",function(){
            var on = $(carousel).children(".on");
            on.stop(true,true).hide(animateTime).removeClass("on");
            if(on.next().is("li")){
                switchIndex($(carousel).children("li").index(on.next()));
                on.next().stop(true,true).addClass("on").delay(animateTime/2).show(animateTime);
            }else{
                switchIndex($(carousel).children("li").index(list[0]));
                $(list[0]).stop(true,true).addClass("on").delay(animateTime/2).show(animateTime);
            }
        });

        // 点击跳转对应的图片
        $(indexList).off("touchstart").on("touchstart",function(){
            if ($(this).attr("class") != "index") {
                var on = $(carousel).children(".on");
                var index = $(this).index();
                $(indexList).removeClass("index");
                $(indexList[index]).addClass("index");
                on.stop(true,true).hide(animateTime).removeClass("on");
                $(list[index]).stop(true,true).addClass("on").delay(animateTime/2).show(animateTime);
            }
        });

        /*切换当前索引*/
        function switchIndex(index){
            $(indexList).removeClass("index");
            $(indexList[index]).addClass("index");
        }

        /*定时切换图片*/
        function switchImg(){
            var on = $(carousel).children(".on");
            on.stop(true,true).hide(animateTime).removeClass("on");
            if(on.next().is("li")){
                switchIndex($(carousel).children("li").index(on.next()));
                on.next().stop(true,true).addClass("on").delay(animateTime/2).show(animateTime);
            }else{
                switchIndex($(carousel).children("li").index(list[0]));
                $(list[0]).stop(true,true).addClass("on").delay(animateTime/2).show(animateTime);
            }
        }
    
    }
    componentDidMount(){
            this.carouselFun({
                carousel : ".carousel",//轮播图容器
                indexContainer : ".img-index",//下标容器
                prev : ".carousel-prev",//左按钮
                next : ".carousel-next",//右按钮
                timing : 5000,//自动播放间隔
                animateTime : 10,//动画时间
                auto : true,//是否自动播放
            });
            //左右切换 
			$(".carousel-prev").hover(function(){
				$(this).find("img").attr("src","./project/src/img/left_btn2.png");
			},function(){
				$(this).find("img").attr("src","./project/src/img/left_btn1.png");
			});
			$(".carousel-next").hover(function(){
				$(this).find("img").attr("src","./project/src/img/right_btn2.png");
			},function(){
				$(this).find("img").attr("src","./project/src/img/right_btn1.png");
			});
		
	
    }
    render(){
        return (
            <div className="carousel-content">
                <ul className="carousel">
                    <li><img src="./project/src/img/banner1.jpg"/></li>
                    <li><img src="./project/src/img/banner2.jpg"/></li>
                    <li><img src="./project/src/img/banner3.jpg"/></li>
                    <li><img src="./project/src/img/banner4.jpg"/></li>
                    <li><img src="./project/src/img/banner5.jpg"/></li>
                    <li><img src="./project/src/img/banner6.jpg"/></li>

                </ul>
                <ul className="img-index">
                    
                </ul>
                <div className="carousel-prev">
                    <img src="./project/src/img/left_btn2.png" id="prev"/>
                </div>
                <div className="carousel-next">
                    <img src="./project/src/img/right_btn2.png" id="next"/>  
                </div>
            </div>
        )
    }
}