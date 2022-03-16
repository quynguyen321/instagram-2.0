import React from 'react'
import Post from '../components/Post'

const posts =[
  {
    id: '1',
    username: 'quy.ybu',
    userImg:'https://www.looper.com/img/gallery/fans-agree-this-is-the-worst-character-in-demon-slayer/intro-1629224623.webp',
    img: 'https://www.looper.com/img/gallery/fans-agree-this-is-the-worst-character-in-demon-slayer/intro-1629224623.webp',
    caption:'This is AMAZING'
  },
  {
    id: '2',
    username: 'quy.ybu',
    userImg:'https://www.looper.com/img/gallery/fans-agree-this-is-the-worst-character-in-demon-slayer/intro-1629224623.webp',
    img: 'https://www.looper.com/img/gallery/fans-agree-this-is-the-worst-character-in-demon-slayer/intro-1629224623.webp',
    caption:'wow'
  },
  {
    id: '3',
    username: 'quy.ybu',
    userImg:'https://www.looper.com/img/gallery/fans-agree-this-is-the-worst-character-in-demon-slayer/intro-1629224623.webp',
    img: 'https://www.looper.com/img/gallery/fans-agree-this-is-the-worst-character-in-demon-slayer/intro-1629224623.webp',
    caption:'This is cool'
  },
  
]
function Posts() {
  return (
    <div>
   {posts.map(post => (
      <Post key={post.id} id={post.id}
      username={post.username}
      userImg={post.userImg}
      img={post.img}
      caption={post.caption}
      />
   ))}

    </div>
  )
}

export default Posts