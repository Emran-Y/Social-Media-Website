import Share from '../share/Share'
import Post from '../post/Post'
import { Posts,Users } from '../../dummyData'
import './feed.css'

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        {Posts.map(post => <Post key={post.id} userData={Users.find(user => user.id === post.userId)} postImage={post.photo} postDate={post.date} postText={post.desc} postCommentCount={post.comment} postLikeCount={post.like}  />)}
      </div>
    </div>
  )
}
