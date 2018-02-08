import {combineReducers} from 'redux'





import carRecommend from '../components/home/carRecommendReducer'
import carSearch from '../components/carSearch/carSearchReducer'
import mineRecommend from '../components/mine/mineReducer'
import buyorder from '../components/buyOrder/buyOrderReducer'

import goods from '../components/goods/goodsReduer'
import mess from '../components/mess/messReduer'
import order from '../components/order/orderReduer'
import sell from '../components/sell/sellReduer'
import sellorder from '../components/sellorder/sellorderReduer'


export default combineReducers({

    
    goods,
    mess,

   
    carRecommend,
    carSearch,
    mineRecommend,
    buyorder,
    order,
    sell,
    sellorder
   

})