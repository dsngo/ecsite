import { combineReducers } from "redux";

// const DEFAULT_STATE = {
//   isLogin: boolean,
//   username: string,
//   userId: string,
//   
//   apiStatus: string,
//   cartItems: [],
//   
//   popupStatus: {
//     loginPopup: false,
//     signupPopup: false,
//   }
// }
const isLogin = (state = false, action: any) =>
  (action.type === "LOGIN_SUCCESS" && true) ||
  (action.type === "LOGIN_FAILURE" && false) ||
  (action.type === "LOGOUT_SUCCESS" && false);

const username = (state = "", action: any) =>
  (action.type === "LOGIN_SUCCESS" && action.username) || (action.type === "LOGOUT_SUCCESS" && "");

const cartItems = (state = [], action: any) =>
  (action.type === "LOAD_CART_ITEMS" && [...action.savedCartItems]) ||
  (action.type === "ADD_CART_ITEM" && [...state, action.addedCartItem]) ||
  (action.type === "REMOVE_CART_ITEM" && (state.splice(action.itemIndex, 1), [...state])) ||
  (action.type === "CLEAR_CART_ITEMS" && []);

const popupStatus = (state: any, action: any ) => action.type === "UPDATE_POPUP_STATE" && {...state, [action.popupName]: action[action.popupName]}
export default combineReducers({ isLogin, username, cartItems, popupStatus });
