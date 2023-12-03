import './rightbar.css'
import birthdayPng from '../../assets/gift.png'
import adPng from '../../assets/ad.png'
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src={birthdayPng} alt="birthDay gift "  className='birthdayImg'/>
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img src={adPng} alt="Ad image" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
            {Users.map(user => <Online key={user.id} user={user}/>)}
        </ul>
            
      </div>
    </div>
  )
}
