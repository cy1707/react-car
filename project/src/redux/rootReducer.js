import {combineReducers} from 'redux'


import goods from '../components/goods/goodsReduer'
import mess from '../components/mess/messReduer'

export default combineReducers({
    
    goods,
    mess
})