import axios from "axios";

const config = require("../../config.json");
const urlServer = config.URL_SERVER_API;

export const loginSuccess = (username: string) => ({ username, type: "LOGIN_SUCCESS" });
export const loginFailure = () => ({ type: "LOGIN_FAILURE" });
export const logoutSuccess = () => ({ type: "LOGOUT_SUCCESS" });
export const loadCartItems = (savedCartItems: any[]) => ({ savedCartItems, type: "LOAD_CART_ITEMS" });
export const addCartItem = (item: any) => ({ item, type: "ADD_CART_ITEM" });
export const removeCartItem = (itemIndex: number) => ({ itemIndex, type: "REMOVE_CART_ITEM" });
export const clearCartItem = () => ({ type: "CLEAR_CART_ITEMS" });


// HANDLE POPUP
export const handleOpenPopup = (popupName: string, isOpen: boolean) => ({ popupName, type: "UPDATE_POPUP_STATE", [popupName]: isOpen });

// SERVER API
export const createNewUser = (data: any) => async (dispatch: any) => {
  const { message: apiStatus } = (await axios.post(`${urlServer}/signup-new-user`, data)).data;
  if (apiStatus) {
    dispatch({
      apiStatus,
      type: "CREATE_NEW_USER_SUCCESS",
    });
  } else {
    dispatch({
      type: "CREATE_NEW_USER_FAILURE",
    });
  }
};

export const saveUserInfo = (data: any) => async (dispatch: any, getState: () => any) => {
  const { userId, cartItems } = getState();
  const { message: apiStatus } = (await axios.post(`${urlServer}/save-user-info`, data)).data;
  if (apiStatus) {
    dispatch({
      apiStatus,
      type: "SAVE_USER_INFO_SUCCESS",
    });
  } else {
    dispatch({
      type: "SAVE_USER_INFO_FAILURE",
    });
  }
};

export const logUserIn = (data: any) => async (dispatch: any, getState: () => any) => {
  const { userId, cartItems } = getState();
  const { message: apiStatus, responsedData } = (await axios.post(`${urlServer}/user-login`, data)).data;
  if (apiStatus) {
    dispatch({
      responsedData,
      apiStatus,
      type: "LOGIN_SUCCESS",
    });
  } else {
    dispatch({
      apiStatus,
      type: "LOGIN_FAILURE",
    });
  }
};

// UPDATE FIRST LEVEL OF STORE

export const updateFirstStoreLevel = (key: string, value: any) => ({
  key,
  value,
  type: "UPDATE_FIRST_STORE_LEVEL",
})

export const updateSecondStoreLevel = (storeKey: string, idKey: number, key: string, value: any) => ({
  storeKey,
  idKey,
  key,
  value,
  type: "UPDATE_SECOND_STORE_LEVEL",
})
