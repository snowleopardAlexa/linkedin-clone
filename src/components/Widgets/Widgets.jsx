import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const Widgets = () => {

const newsArticle = (heading, subtitle) => (
  <div className="widgets__article">
      <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
  </div>
)    

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Kion The Lion King", "Top news - 12345 readers")}
        {newsArticle("Coronavirus attacks!", "Covid19 - 100k readers")}
        {newsArticle("New variant on the way!", "Virus - 25k readers")}
        {newsArticle("Big Pharma buys Mediolet", "Medicine - 5000 readers")}
        {newsArticle("Andrea Botticeli Concert", "Music - 900 readers")}
        {newsArticle("Learn how to cook", "Cooking - 455 readers")}
    </div>
  )
}

export default Widgets