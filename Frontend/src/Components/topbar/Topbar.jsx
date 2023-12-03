import './topbar.css'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ChatIcon from '@mui/icons-material/Chat'
import personImage from '../../assets/person/1.jpeg'


function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">Connectify</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <SearchIcon className='searchIcon'/>
                <input placeholder='search for friends,posts and videos' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topBarLink">HomePage</span>
                <span className="topBarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBage">1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon/>
                    <span className="topbarIconBage">10</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon/>
                    <span className="topbarIconBage">3</span>
                </div>
                <img src={personImage} alt="profile image" className="topbarImage" />
            </div>
        </div>

    </div>
  )
}

export default Topbar