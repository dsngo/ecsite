import { combineReducers } from "redux";

// const DEFAULT_STATE = {
//   isLogin: boolean;
//   username: string;
//   cartNumberOfItems: number;
// }
const isLogin = (state = false, action: any) =>
  (action.type === "LOGIN_SUCCESS" && true) ||
  (action.type === "LOGIN_FAILURE" && false) ||
  (action.type === "LOGOUT" && false);

const username = (state = "", action: any) =>
  (action.type === "LOGIN_SUCCESS" && action.username) || (action.type === "LOGOUT" && "");

const cartItems = (state = [], action: any) =>
  (action.type === "LOAD_CART_ITEMS" && [...action.savedCartItems]) ||
  (action.type === "ADD_CART_ITEM" && [...state, action.addedCartItem]) ||
  (action.type === "REMOVE_CART_ITEM" && (state.splice(action.itemIndex, 1), [...state])) ||
  (action.type === "CLEAR_CART_ITEM" && []);

export default combineReducers({ isLogin, username, cartItems });
