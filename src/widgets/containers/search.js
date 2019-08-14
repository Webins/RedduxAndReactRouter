import React, { Component } from "react";
import Search from "../components/search";
import { connect } from "react-redux";
import { searchAsyncVideo } from "../../reducers/actions/actions";
import { bindActionCreators } from "redux";

class SearchContainer extends Component {
  state = {
    value: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.actions(this.input.value);
  };
  setInputRef = element => {
    this.input = element;
  };
  handleInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchAsyncVideo, dispatch)
  };
}

export default connect(
  undefined,
  mapDispatchToProps
)(SearchContainer);
