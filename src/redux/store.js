import { legacy_createStore } from "redux";
import chessReducer from "./reducer";


const store = legacy_createStore(chessReducer);

export default store;
