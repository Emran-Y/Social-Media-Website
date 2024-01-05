import './share.css'
// import personImage from '../../assets/person/1.jpeg'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import LabelIcon from '@mui/icons-material/Label'
import RoomIcon from '@mui/icons-material/Room'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src='/assets/person/1.jpeg' alt="" className='shareProfileImage' />
                <input 
                  placeholder='What is in your mind' 
                  type="text"  
                  className='shareInput'
                />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                  <div className="shareOption">
                    <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo or Video</span>
                  </div>
                  <div className="shareOption">
                    <LabelIcon htmlColor='blue' className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                  </div>
                  <div className="shareOption">
                    <RoomIcon  htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                  </div>
                  <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='gold' className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                  </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
