import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import goods from '../components/goods/goodsReduer'

export default combineReducers({
    prolist,
    goods
})