import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption/InputOption'
import Posts from './Posts/Posts'

function Feed() {
  return (
    <div className="feed">
      <div class="feed__inputContainer">
          <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" />
                <button type="submit">Send</button>
            </form>
          </div>
          <div className="feed__inputOptions">
            <InputOption 
              title="Photo" 
              Icon={ImageIcon} 
              color="#70B5F9"
            />
            <InputOption 
              title="Photo" 
              Icon={SubscriptionsIcon} 
              color="#E7A33E"
            />
            <InputOption 
              title="Event" 
              Icon={EventNoteIcon} 
              color="#C0CBCD"
            />
            <InputOption 
              title="Write article" 
              Icon={CalendarViewDayIcon} 
              color="#03AC13"
            />
          </div>
      </div>
      <Posts 
        name="Aleksandra Slomska"
        description="This is a msg"
        message="this works!"
      />
    </div>
  )
}

export default Feed
