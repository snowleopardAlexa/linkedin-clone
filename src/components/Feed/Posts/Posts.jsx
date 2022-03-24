import { Avatar } from '@material-ui/core'
import './Posts.css'

const Posts = ({ name, description, message, photoUrl }) => {
  return (
    <div className="posts">
      <div className="post__header">
          <Avatar />
          <div className="post__info">
              <h2>Aleksandra Slomska</h2>
              <p>desc</p>
          </div>
      </div>
      <div className="post__body">
          <p>Message goes here</p>
      </div>
    </div>
  )
}

export default Posts
