import { combineReducers } from "redux";
import {numberReducer} from "./numberReducer";



export const rootReducer_Redux_ActionMini = combineReducers({
    numberReducer: numberReducer
})