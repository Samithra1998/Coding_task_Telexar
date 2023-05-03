import { combineReducers } from "redux";
import auth from './auth';
import expenses from "./expenses";

export const reducers = combineReducers({auth, expenses});