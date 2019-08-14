import React, { Component } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import { withRouter } from "react-router";
import randomNumber from "../../pages/components/random";

class Header extends Component {
  handleBack = () => {
    this.props.history.goBack();
  };
  handleForward = () => {
    this.props.history.goForward();
  };
  handleVideo = () => {
    this.props.history.push(`/videos?id=${randomNumber(1, 20)}`);
  };
  render() {
    return (
      <header className="Header">
        <img src={logo} width={250} />
        <nav>
          <ul className="ul1">
            <li>
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to="/perfil" activeClassName="is-selected">
                Perfil
              </NavLink>
            </li>
          </ul>
          <ul className="ul2">
            <li>
              <a onClick={this.handleBack}>👈</a>
            </li>
            <li>
              <a onClick={this.handleForward}>👉</a>
            </li>
            <li>
              <a onClick={this.handleVideo}>🎥</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
