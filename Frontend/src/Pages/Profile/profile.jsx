import Topbar from "../../Components/topbar/Topbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import Feed from "../../Components/feed/Feed"
import Rightbar from "../../Components/rightbar/Rightbar"
import profileCover from '../../assets/post/3.jpeg'
import profileUser from '../../assets/person/7.jpeg'
import './profile.css'

function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={profileCover} alt="" className="profileCoverImg" />
                        <img src={profileUser} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Quantum W.</h4>
                        <span className="profileInfoDesc">CHASING PERFECTION WITH A BROKEN LEG</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile={true}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile