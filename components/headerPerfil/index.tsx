import React from "react";
import HeaderComAcoes from "../headerComAcoes";
import { leftArrow } from "../../public/image";
import Avatar from "../avatar";
import Button from "../button";

const HeaderPerfil = ({ usuarioLogado, usuario }: any) => {
  return (
    <>
      <div className="cabecalhoPerfil">
        <HeaderComAcoes iconeEsquerda={leftArrow} titulo={usuario.nome} />
      </div>

      <div className="statusPerfil">
        <Avatar src={usuario.avatar} />
        <div className="statusContainer">
          <div className="status">
            <strong>15</strong>
            <span>Publicações</span>
          </div>

          <div className="status">
            <strong>128</strong>
            <span>Seguidores</span>
          </div>

          <div className="status">
            <strong>135</strong>
            <span>Seguindo</span>
          </div>

          <Button type="button" text="seguir" color="primary" />
        </div>
      </div>
    </>
  );
};

export default HeaderPerfil;
