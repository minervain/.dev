import { createStore } from 'redux';
import rootReducer from './reducers/index'; // Tüm reducer'ları içeren bir rootReducer ekleyin

const store = createStore(rootReducer);

export default store;