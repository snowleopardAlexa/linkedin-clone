import { Avatar } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons'
import InputOption from './InputOption/InputOption'

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
      <div className="post__butons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
      </div>
    </div>
  )
}

export default Posts
