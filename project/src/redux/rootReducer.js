import {combineReducers} from 'redux'

import carRecommend from '../components/home/carRecommendReducer'
import carSearch from '../components/carSearch/carSearchReducer'
import mineRecommend from '../components/mine/mineReducer'
import buyorder from '../components/buyOrder/buyOrderReducer'
import goods from '../components/goods/goodsReduer'

export default combineReducers({
    
    carRecommend,
    carSearch,
    mineRecommend,
    buyorder,
    goods
})