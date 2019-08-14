import { LOADER } from "./actions-type/actionType";
import { Map } from "immutable";

const preloadState = Map({
  loader: false
});

function loader(state = preloadState, action) {
  switch (action.type) {
    case LOADER:
      return state.set("active", action.payload.value);
    default:
      return state;
  }
}

export default loader;
