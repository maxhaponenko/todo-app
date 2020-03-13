import { combineReducers } from 'redux';
import itemsReducer from 'redux/items/items.reducer';

const rootReducer = combineReducers({
    items: itemsReducer
})

export default rootReducer 