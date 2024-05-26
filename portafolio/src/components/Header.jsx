import React from "react";
import "../css/Header.css";
import Perfil from "../assets/foto.jpg";
import { Titulo } from "../constants/constants";
import { Subtitulo } from "../constants/constants";

const Header = () => {
  return (
    <div className="header">
      <br />
      <div className="titulo">
        <h1 className="moving-text">{Titulo}</h1>

        <h2 className="moving-text">{Subtitulo}</h2>
      </div>

      <img src={Perfil} className="perfil" alt="" />
    </div>
  );
};

export default Header;
