import Image from 'next/image'
import React from 'react'
import { logoHorizontal, search } from '../../public/image'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='homeHeader'>
        <div className='conteudoCabecalhoPrincipal'>
            <div className='logoHeaderPrincipal'>
                <Image src={logoHorizontal} alt='Logo Principal' fill />
            </div>

            <div className='barraPesquisa'>
              <div className='containerImagemLupa'>
                <Image src={search} alt='Icone Lupa' fill />
              </div>
              <input
              type='text'
              value={''}
              onChange={()=>console.log('pesquisando')}
              />
            </div>
            <Navbar className='desktop' />
        </div>
    </header>
  )
}

export default Header