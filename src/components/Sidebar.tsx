import styled from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
  return(
    <aside className={styled.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        className={styled.cover}
      />

      <div className={styled.profile}>
        <Avatar
          src="https://github.com/pedrohenriquelimasilva.png" 
        />
        <strong>Pedro Henrique</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}