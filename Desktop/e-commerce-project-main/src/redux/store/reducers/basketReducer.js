import { createStore } from 'redux';
// Başlangıç durumu
const initialState = {
  basketItems: []
};

// Reducer işlevi
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload]
      };
      case 'REMOVE_FROM_BASKET':
        return {
          ...state,
          basketItems: state.basketItems.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
// Redux store oluşturma
const store = createStore(basketReducer);

export default basketReducer;
