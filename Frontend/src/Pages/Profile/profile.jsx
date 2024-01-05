import Topbar from "../../Components/topbar/Topbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import Feed from "../../Components/feed/Feed"
import Rightbar from "../../Components/rightbar/Rightbar"
// import profileCover from '../../assets/post/3.jpeg'
// import profileUser from '../../assets/person/7.jpeg'
import './profile.css'
import { useEffect, useState } from "react"
import axios from "axios"
import {useParams} from 'react-router'

function Profile() {
    const [user,setUser] = useState({})
    const params = useParams()

    useEffect(() => {
      const fetchUser = async () => {
        const promise = await axios.get('http://localhost:8800/api/user?username=' + params.username)
        setUser(promise.data)
      }
      fetchUser()
    }, [params.username]);
  return (
    <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img 
                        
                        src={user.coverPicture && `/assets/${user.profilePicture}` || '/assets/person/noCoverPicture.jpeg'}  
                        alt="" className="profileCoverImg" />
                        <img 
                        src={user.profilePicture && `/assets/${user.profilePicture}` || '/assets/person/noProfilePicture.jpeg'} 
                        alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={params.username}/>
                    <Rightbar user={user}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile