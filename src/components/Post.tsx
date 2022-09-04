import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'


import styled from './Post.module.css'

interface Author {
  name: string,
  author_url: string,
  role: string
}

interface Content{
  type: string,
  content: string;
}

interface PostProps{
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({author, content, publishedAt}: PostProps){
  const publish = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'" ,{
    locale: ptBR
  })

  const publishedAtRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })


  const [comments, setComments] = useState(['Que código foda!'])
  const [newComments, setNewComments] = useState('')


  function handleSubmitNewComment(event: FormEvent){
    event.preventDefault()

    setComments([...comments, newComments])

    setNewComments('')
  }

  function handleSetNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewComments(event.target.value)
  }

  function deleteComment(comment: string){
    const newComments = comments.filter(element => element != comment)
    setComments(newComments)
  }

  function handleSubmitNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Campo obrigatorio!')
  }

  const isNewCommentEmyte = newComments.length === 0

  return(
    <article className={styled.post}>
      <header>
        <div className={styled.author}>
          <Avatar src={author.author_url}/>
          <div className={styled.profile}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={publishedAt.toISOString()} title={publish}>{publishedAtRelativeNow}</time>
      </header>

      <div className={styled.content}>
        {content.map( line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }else if(line.type === 'link'){
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
          
        })}
        
      </div>

      <form onSubmit={handleSubmitNewComment} className={styled.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          value={newComments}
          name="commentForm"
          placeholder='Deixe seu comentário aqui'
          onChange={handleSetNewComment}
          required
          onInvalid={handleSubmitNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmyte}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styled.commentList}>
        {comments.map(comment => {
          return <Comment onDeleteComment={deleteComment} key={comment} comment={comment} />
        })}
      </div>
    </article>
  )
}