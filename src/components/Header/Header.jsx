import './Header.css'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="/linkedin.png" alt="linkedin-icon" />
      </div>  
      <div className="header__search">
        <SearchIcon />
        <input type="text" />
      </div>
    </div>
  )
}

export default Header