import {combineReducers} from 'redux'

import carSearch from '../components/carSearch/carSearchReducer'
import mineRecommend from '../components/mine/mineReducer'
import buyorder from '../components/buyOrder/buyOrderReducer'
import goods from '../components/goods/goodsReduer'
import mess from '../components/mess/messReduer'
import order from '../components/order/orderReduer'
import sell from '../components/sell/sellReduer'
import sellorder from '../components/sellorder/sellorderReduer'
import goodswrite from '../components/goods/goodsWriteReduser'


export default combineReducers({
    carSearch,
    mineRecommend,
    buyorder,
    goods,
    mess,
    order,
    sell,
    sellorder,
    goodswrite,
   
})