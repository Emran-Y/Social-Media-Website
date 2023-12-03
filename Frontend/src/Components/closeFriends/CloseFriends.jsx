import './closeFriends.css'

function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
        <img  className='sidebarFriendImage' src={user.profilePicture} alt="friend Image" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriends