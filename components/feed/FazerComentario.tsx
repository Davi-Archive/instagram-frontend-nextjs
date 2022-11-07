import React from 'react'
import Avatar from '../avatar';

const FazerComentario = ({usuarioLogado}:any) => {
  return (
    <div className='containerFazerComentario'>
        <Avatar src={usuarioLogado.avatar} />
        <textarea rows={2} placeholder='Adicione um comentário...'></textarea>
      <button
      type='button'
      className='btnPublicacao desktop'
      >Publicar</button>

    </div>
  )
};

export default FazerComentario