import Topbar from "../../Components/topbar/Topbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import Feed from "../../Components/feed/Feed"
import Rightbar from "../../Components/rightbar/Rightbar"
import './home.css'

function Home() {
  return (
    <div>
    <Topbar/>
      <div className="home-container">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home