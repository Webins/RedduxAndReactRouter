import React, { PureComponent } from "react";
import "./generic-page.css";
import { withRouter } from "react-router";
import randomNumber from "./random";

class NotFound extends PureComponent {
  handleBack = () => {
    this.props.history.goBack();
  };

  handleRandomVideos = () => {
    this.props.history.push(`/videos?id=${randomNumber(1, 20)}`);
  };
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">🤷‍♀️🤷‍♂️</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button className="Button" type="submit" onClick={this.handleBack}>
          Ir a atras 👈
        </button>
        <button
          className="Button"
          type="submit"
          onClick={this.handleRandomVideos}
        >
          Ver un video aleatorio🎥🎞
        </button>
      </div>
    );
  }
}

export default withRouter(NotFound);
