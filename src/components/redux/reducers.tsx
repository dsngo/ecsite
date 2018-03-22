import combineReducers from "redux/es/combineReducers";

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
  (action.type === "LOGOUT_SUCCESS" && false) ||
  state;

const username = (state = "", action: any) =>
  (action.type === "LOGIN_SUCCESS" && action.username) || (action.type === "LOGOUT_SUCCESS" && "") || state;

const cartItems = (state = [], action: any) =>
  (action.type === "LOAD_CART_ITEMS" && [...action.savedCartItems]) ||
  (action.type === "ADD_CART_ITEM" && [...state, action.addedCartItem]) ||
  (action.type === "REMOVE_CART_ITEM" && state.filter((e, i) => i !== action.itemIndex)) ||
  (action.type === "CLEAR_CART_ITEMS" && []) ||
  state;

const popupStatus = (state = { loginPopup: false, signupPopup: false }, action: any) =>
  (action.type === "UPDATE_POPUP_STATE" && { ...state, [action.popupName]: action[action.popupName] }) || state;
export default combineReducers({ isLogin, username, cartItems, popupStatus });
