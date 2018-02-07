import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import carRecommend from '../components/home/carRecommendReducer'
import carSearch from '../components/carSearch/carSearchReducer'

export default combineReducers({
    prolist,
    carRecommend,
    carSearch,
})