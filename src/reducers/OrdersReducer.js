import getNextOrderer from '../utils/getNextOrderer';

export const initialState = {
  orders: [],
  nextOrderer: getNextOrderer(),
};

const OrdersReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    return {
      orders: action.orders,
      nextOrderer: getNextOrderer(action.orders),
    };
  }

  return state;
};

export default OrdersReducer;
