import styled from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps{
  comment: string;
  onDeleteComment: (comment:string) => void;
}

export function Comment({comment, onDeleteComment}: CommentProps){
  const [likeComment, setLikeComment] = useState(0)


  function handleDeleteComment(){
    onDeleteComment(comment)
  }

  function handleLikeComment(){
    setLikeComment(state => {
      return state + 1
    })
  }

  return(
    <div className={styled.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt=""/>

      <div className={styled.commentBox}>
        <div className={styled.commentBoxContent}>
          <header>
            <div className={styled.avatar}>
              <strong>Pedro Henrique</strong>
              <time dateTime="2021-07-13 08:30:17" title="13 de Julho às 08:30h">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment}>
              <Trash  size={24}/>
            </button>
          </header>

          <p>
            {comment}
          </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}