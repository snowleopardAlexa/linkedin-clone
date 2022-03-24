import { Avatar } from "@material-ui/core"
import "./Sidebar.css"

const Sidebar = () => {

const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
)

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="/background.jpg" alt="background" />
            <Avatar />
            <h2>Aleksandra Slomska</h2>
            <h4>aleksandravslomska@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar_stat">
               <p>Who viewed you</p>
               <p className="sidebar__statNumber">2,345</p>
            </div>
            <div className="sidebar_stat">
               <p>Whos on post</p>
               <p className="sidebar__statNumber">2,345</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("nextjs")}
            {recentItem("firebase")}
            {recentItem("developer")}
            {recentItem("javascript")}
        </div>
    </div>
  )
}

export default Sidebar