import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'



import './global.css'
import styled from './App.module.css'


const postApi = [
  {
    id: 1,
    author: {
      name: 'Pedro Henrique',
      author_url: 'https://github.com/pedrohenriquelimasilva.png',
      role: 'Programador back-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-08-25 20:00:00')
  },
  {
    id: 2,
    author: {
      name: 'Mayk Brito',
      author_url: 'https://github.com/maykbrito.png',
      role: 'Educador @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-08-20 20:00:00')
  }
]


function App() { 
  return (
    <>
      <Header />

      <div className={styled.wapper}>
        <Sidebar />
        <main>
          {
            postApi.map(({author, content, publishedAt, id}) => {
              return <Post key={id} author={author} content={content} publishedAt={publishedAt} />
            })
          }
        </main>
      </div>     
    </>
  )
}

export default App
