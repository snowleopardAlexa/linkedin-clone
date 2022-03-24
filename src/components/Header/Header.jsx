import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

const Header = () => {

const dispatch = useDispatch()

const logoutOfApp = () => {
  dispatch(logout())
  auth.signOut()
}


  return (
    <div className="header">
      <div className="header__left">
        <img src="/linkedin.png" alt="linkedin-icon" />
      </div>  

      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search" type="text" />
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption 
          avatar="/avatar.jpg" 
          title="me" 
          onClick={logoutOfApp}
        />
      </div>
    </div>
  )
}

export default Header