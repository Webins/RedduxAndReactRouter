import data from "../schemas/index";
import { fromJS } from "immutable";
import { SEARCH_VIDEOS } from "./actions-type/actionType";
const preloadState = fromJS({
  entities: data.entities,
  categories: data.result.categories,
  search: ""
});

function handleData(state = preloadState, action) {
  switch (action.type) {
    case SEARCH_VIDEOS: {
      return state.set("search", action.payload.query);
    }
    default:
      return state;
  }
}

export default handleData;
