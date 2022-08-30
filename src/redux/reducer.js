import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];

    case REMOVE_TO_CART:
      data.length = data.length ? data.length - 1 : [];
      return [...data];

    case EMPTY_CART:
      data.length = [];
      return [...data];

    default:
      return [];
  }
};
