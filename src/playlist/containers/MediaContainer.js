import React from "react";
import Media from "../components/media";
import { connect } from "react-redux";
import { openModal } from "../../reducers/actions/actions";
import { bindActionCreators } from "redux";
class MediaContainer extends React.Component {
  openModal = id => {
    this.props.actions(id);
  };
  render() {
    return (
      <Media
        category={this.props.data.get("category")}
        author={this.props.data.get("author")}
        cover={this.props.data.get("cover")}
        id={this.props.data.get("id")}
        src={this.props.data.get("src")}
        title={this.props.data.get("title")}
        type={this.props.data.get("type")}
        openModal={this.props.openModal}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    data: state
      .get("data")
      .get("entities")
      .get("media")
      .get(props.id)
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(openModal, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaContainer);
