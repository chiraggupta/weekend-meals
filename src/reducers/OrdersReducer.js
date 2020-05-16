import getNextOrderer from '../utils/getNextOrderer';

const getUniqueRestaurantsWithDetails = (orders) =>
  orders.reduce(
    (
      accumulator,
      {
        restaurant: orderRestaurant,
        category: orderCategory,
        rating: orderRating,
      },
    ) => {
      const previousRating =
        accumulator[orderRestaurant] && accumulator[orderRestaurant].rating;
      const newRating = previousRating || orderRating;
      return {
        ...accumulator,
        [orderRestaurant]: { category: orderCategory, rating: newRating },
      };
    },
    {},
  );

export const initialState = {
  orders: [], // Array<{category, date, orderer, rating, restaurant}>, Sorted New to Old
  restaurantsWithDetails: {}, // Object<{ restaurant: { category, rating} }
  nextOrderer: getNextOrderer(), // String
};

const OrdersReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    const orders = [...action.orders];
    return {
      orders,
      restaurantsWithDetails: getUniqueRestaurantsWithDetails(orders),
      nextOrderer: getNextOrderer(orders),
    };
  }

  return state;
};

export default OrdersReducer;
