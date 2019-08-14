import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";
import { connect } from "react-redux";
import { List } from "immutable";
import * as actions from "../../reducers/actions/actions";
import { bindActionCreators } from "redux";

class Home extends Component {
  handleOpenModal = id => {
    this.props.actions.openModal(id);
  };
  handleCloseModal = () => {
    this.props.actions.closeModal();
  };
  componentDidMount() {
    const search = this.props.location.search;
    if (search) {
      const id = search.split("=");
      this.handleOpenModal(id[1]);
    }
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
            loader={this.props.loader}
          />
          {this.props.modal.get("visibility") && (
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer
                  autoplay
                  id={this.props.modal.get("mediaId")}
                  // src={this.state.media.src}
                  // title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          )}
        </HomeLayout>
      </HandleError>
    );
  }
}
function mapStateToProps(state) {
  const categories = state
    .get("data")
    .get("categories")
    .map(categoryId => {
      return state
        .get("data")
        .get("entities")
        .get("categories")
        .get(categoryId);
    });
  let results = List();
  const search = state.get("data").get("search");
  if (search) {
    const mediaList = state
      .get("data")
      .get("entities")
      .get("media");
    results = mediaList
      .filter(item => {
        return (
          item
            .get("title")
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item
            .get("author")
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      })
      .toList();
  }
  return {
    categories,
    search: results,
    modal: state.get("modal"),
    loader: state.get("loader").get("active")
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
