import React, { Component } from "react";
import VideoPlayer from "../../player/containers/video-player";
import { connect } from "react-redux";
import notFound from "../components/notFound";

class Videos extends Component {
  render() {
    if (this.props.existId) return <VideoPlayer id={id} />;
    else return <notFound />;
  }
}
function mapStateToProps(state, props) {
  const id = props.match.params.id;
  return {
    existId: state
      .get("data")
      .get("entities")
      .get("media")
      .has(props.id),
    id: id
  };
}

export default connect(mapStateToProps)(Videos);
