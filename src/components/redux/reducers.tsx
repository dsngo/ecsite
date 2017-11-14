import { combineReducers } from "redux";

// const DEFAULT_STATE = {
//   isLogin: boolean;
//   username: string;
//   cartNumberOfItems: number;
// }
const isLogin = (state = false, action:any)=> action.type === "LOGGED_IN" 

export const rootReducer = combineReducers({

});
