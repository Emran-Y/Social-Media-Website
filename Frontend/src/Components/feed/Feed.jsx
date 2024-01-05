import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts,Users } from '../../dummyData'
import './feed.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Feed({username}) {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const promise = username ?  await  axios.get(`http://localhost:8800/api/post/profile/${username}`)  : await axios.get(`http://localhost:8800/api/post/timeline/656ebab6c636cfbef0f4e44f`)
      setPosts(promise.data)
    }
    fetchPosts()
  }, [username]);
  
  
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        {posts ? posts.map(p => <Post key={p._id} post={p} />) : <h1>Loading ...</h1>}
      </div>
    </div>
  )
}
