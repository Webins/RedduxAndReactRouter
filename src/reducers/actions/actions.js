import * as ACTION_TYPE from "../actions-type/actionType";

export function openModal(id) {
  return {
    type: ACTION_TYPE.OPEN_MODAL,
    payload: {
      mediaId: id
    }
  };
}

export function closeModal() {
  return {
    type: ACTION_TYPE.CLOSE_MODAL
  };
}

export function searchVideo(query) {
  return {
    type: ACTION_TYPE.SEARCH_VIDEOS,
    payload: {
      query
    }
  };
}

export function searchAsyncVideo(query) {
  return dispatch => {
    dispatch(loader(true));
    setTimeout(() => {
      dispatch(loader(false));
      dispatch(searchVideo(query));
    }, 1500);
  };
}

export function loader(value) {
  return {
    type: ACTION_TYPE.LOADER,
    payload: {
      value
    }
  };
}
