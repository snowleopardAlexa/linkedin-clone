import './Feed.css'
import CreateIcon from "@material-ui/core/Create"

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
      </div>
    </div>
  )
}

export default Feed
