import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import carRecommend from '../components/home/carRecommendReducer'
import carSearch from '../components/carSearch/carSearchReducer'
import mineRecommend from '../components/mine/mineReducer'
import buyorder from '../components/buyOrder/buyOrderReducer'

export default combineReducers({
    prolist,
    carRecommend,
    carSearch,
    mineRecommend,
    buyorder,
})