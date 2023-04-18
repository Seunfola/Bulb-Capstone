import { legacy_createStore } from "redux";
import rootReducers from "./action/Reducers";


const store = legacy_createStore(rootReducers);

export default store;