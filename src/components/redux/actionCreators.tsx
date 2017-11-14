import axios from "axios";

export const loginSuccess = (username: string) => ({ username, type: "LOGIN_SUCCESS" });
export const loginFailure = () => ({ type: "LOGIN_FAILURE" });
export const logoutSuccess = () => ({ type: "LOGOUT_SUCCESS" });
export const loadCartItems = (savedCartItems: any[]) => ({ savedCartItems, type: "LOAD_CART_ITEMS" });
export const addCartItem = (addedCartItem: any) => ({addedCartItem, type: "ADD_CART_ITEM"});
export const removeCartItem = (itemIndex: number) => ({itemIndex, type: "REMOVE_CART_ITEM"});
export const clearCartItem = () => ({type: "CLEAR_CART_ITEMS"});
