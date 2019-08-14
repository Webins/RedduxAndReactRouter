import { fromJS } from "immutable";
import { OPEN_MODAL, CLOSE_MODAL } from "./actions-type/actionType";

const preloadState = fromJS({
  visibility: false,
  mediaId: null
});

function handleModal(state = preloadState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return state.merge({
        visibility: true,
        mediaId: action.payload.mediaId
      });

    case CLOSE_MODAL:
      return state.set("visibility", false);
    default:
      return state;
  }
}

export default handleModal;
