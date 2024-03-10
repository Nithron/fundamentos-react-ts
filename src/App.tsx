import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

// authors {avatar_url: String, name: String, role: String}
// publishedAt: Date
// content: String

const posts: PostType[] = [

 {
  id: 1,
  author: {
    avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQEILot3OHU8hw/profile-displayphoto-shrink_100_100/0/1648603447024?e=1700697600&v=beta&t=PNDFIMqELednJx-POBzVYfeubQ1PqI6eG86oBG1ahhE',
    name: "Lucas Moraes",
    role: "Web Dev",
  },
  content: [
    {type: 'paragraph', content: 'Fala galera'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.'},
    {type: 'link', content:'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-05-03 20:00:00')
 },
 {
  id: 2,
  author: {
    avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQEILot3OHU8hw/profile-displayphoto-shrink_100_100/0/1648603447024?e=1700697600&v=beta&t=PNDFIMqELednJx-POBzVYfeubQ1PqI6eG86oBG1ahhE',
    name: "Lucas Moraes",
    role: "Web Dev",
  },
  content: [
    {type: 'paragraph', content: 'Fala galera'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.'},
    {type: 'link', content:'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-08-15 11:26:52')
 }
]

export function App() {

  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post =>{
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}

        </main>
      </div>

    </div>  
   )
}