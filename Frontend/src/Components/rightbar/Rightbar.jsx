import './rightbar.css'
import birthdayPng from '../../assets/gift.png'
import adPng from '../../assets/ad.png'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import followingImage from '../../assets/person/1.jpeg'

export default function Rightbar({profile}) {

  const homeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src={birthdayPng} alt="birthDay gift "  className='birthdayImg'/>
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img src={adPng} alt="Ad image" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
            {Users.map(user => <Online key={user.id} user={user}/>)}
        </ul>
      </>
    )
  }

  const profileRightBar = () => {
    return(
      <>
        <h4 className="rightBarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Addis Ababa</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Kemise</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          </div>
          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={followingImage} alt="Following Image" className="rightbarFollowingImage" />
              <span className="rightbarFollowingName">Vitapu P.</span>
            </div>
            <div className="rightbarFollowing">
              <img src={followingImage} alt="Following Image" className="rightbarFollowingImage" />
              <span className="rightbarFollowingName">Vitapu P.</span>
            </div>
            <div className="rightbarFollowing">
              <img src={followingImage} alt="Following Image" className="rightbarFollowingImage" />
              <span className="rightbarFollowingName">Vitapu P.</span>
            </div>
            <div className="rightbarFollowing">
              <img src={followingImage} alt="Following Image" className="rightbarFollowingImage" />
              <span className="rightbarFollowingName">Vitapu P.</span>
            </div>
            <div className="rightbarFollowing">
              <img src={followingImage} alt="Following Image" className="rightbarFollowingImage" />
              <span className="rightbarFollowingName">Vitapu P.</span>
            </div>
            <div className="rightbarFollowing">
              <img src={followingImage} alt="Following Image" className="rightbarFollowingImage" />
              <span className="rightbarFollowingName">Vitapu P.</span>
            
            </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? profileRightBar() : homeRightBar()}
      </div>
    </div>
  )
}
