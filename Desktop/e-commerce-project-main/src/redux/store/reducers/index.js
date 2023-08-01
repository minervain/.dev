import { combineReducers } from 'redux';
import basketReducer from './basketReducer'; // Yeni reducer'ı dahil edin

const rootReducer = combineReducers({
  basket: basketReducer, // Yeni reducer'ı ana reducer'a ekleyin
});

export default rootReducer;