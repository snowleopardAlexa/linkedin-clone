import './Header.css'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
  return (
    <div className="header">
      <h1>header</h1>
      <div className="header__left">
        <img src="" alt="" />
      </div>  
      <div className="header__right">
        <SearchIcon />
        <input type="text" />
      </div>
    </div>
  )
}

export default Header