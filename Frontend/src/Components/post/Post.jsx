import './post.css'
// import noProfilePic from '../../assets/person/noProfilePicture.jpeg'
// import postImage from '../../assets/post/1.jpeg'
// import likePng from '../../assets/like.png'
// import heartPng from '../../assets/heart.png'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import axios from 'axios'
import {format} from 'timeago.js'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'



function Post({post}) {
    
    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user,setUser] = useState({})

    useEffect(() => {
      const fetchUser = async () => {
        const promise = await axios.get(`http://localhost:8800/api/user?userId=${post.userId}`)
        setUser(promise.data)
      }
      fetchUser()
    }, [post.userId]);
    

    const likeHandler = () => {
      if(isLiked){
        setLike(like => like - 1)
        setIsLiked(!isLiked)
      }else{
        setLike(like => like + 1)
        setIsLiked(!isLiked)
      }
    }

    return (
      <div className='post'>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>
                <img className='postProfileImage' 
                src={user.profilePicture && `/assets/${user.profilePicture}` || '/assets/person/noProfilePicture.jpeg'} 
                alt="poster Image" 
                />
              </Link>

              <div className="postUserName">{user.username}</div>
              <div className="postDate">{format(post.createdAt)}</div>
            </div>
            <div className="postTopRight">
              <MoreVertIcon/>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img className='postImage' src={`/assets/${post.image}`} 
            alt="post Image" 
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className='likeIcon'  src='/assets/like.png' alt="like png" onClick={likeHandler}  />
              <img className='likeIcon'  src='/assets/heart.png' alt="heart png" onClick={likeHandler} />
              <span className="likeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText"> comments</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  




export default Post