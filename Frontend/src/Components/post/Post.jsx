import './post.css'
import personImage from '../../assets/person/1.jpeg'
// import postImage from '../../assets/post/1.jpeg'
import likePng from '../../assets/like.png'
import heartPng from '../../assets/heart.png'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react'
function Post({userData,postImage,postDate,postText,postCommentCount,postLikeCount}) {
    
    const [like,setLike] = useState(postLikeCount)
    const [isLiked,setIsLiked] = useState(false)

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
              <img className='postProfileImage' src={userData.profilePicture} alt="poster Image" />
              <div className="postUserName">{userData.username}</div>
              <div className="postDate">{postDate}</div>
            </div>
            <div className="postTopRight">
              <MoreVertIcon/>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{postText}</span>
            <img className='postImage' src={postImage} alt="post Image" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className='likeIcon'  src={likePng} alt="like png" onClick={likeHandler}  />
              <img className='likeIcon'  src={heartPng} alt="heart png" onClick={likeHandler} />
              <span className="likeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{postCommentCount} comments</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  




export default Post