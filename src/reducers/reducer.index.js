import handleData from "./reducer.handleData";
import handleModal from "./reducer.handleModal";
import { combineReducers } from "redux-immutable";
import loader from "./reducer.loader";

const rootReducer = combineReducers({
  data: handleData,
  modal: handleModal,
  loader
});

export default rootReducer;
