import React from "react";
import "./home.css";
import logo from "../../images/logo.png";
import reactRouter from "../../images/reactrouter.jpg";
import redux from "../../images/redux.jpg";
import react from "../../images/react.jpg";
import reactNative from "../../images/reactnative.jpg";
import platzi from "../../images/platzi-logo.png";

const Home = () => (
  <div className="Page">
    <h1>
      Bienvenido a Platzi<span className="title">Video</span>{" "}
    </h1>
    <h2>Aqui encontrarás tus videos favoritos en tan solo un click</h2>
    <h3>una plataforma creada en los cursos de</h3>
    <div className="Wrapper">
      <p>
        <a href="https://platzi.com/react">React</a>
        <img src={react} width={60} />
      </p>
      <p>
        <a href="https://platzi.com/router">React Router</a>
        <img src={reactRouter} width={60} />
      </p>
      <p>
        <a href="https://platzi.com/redux">Redux</a>{" "}
        <img src={redux} width={60} />
      </p>
    </div>
    <div className="Wrapper">
      <h5 className="mobile">
        Puedes encontrar su versión móvil en el curso de{" "}
        <a href="https://platzi.com/native">React Native</a>
        <img src={reactNative} width={60} />
      </h5>
    </div>
  </div>
);

export default Home;
