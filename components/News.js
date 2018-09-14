const news = [
  {
    id: 1,
    topic: 'Vice-Chancellor Urges Participants to Maximize Opportunuity at Training Programme on Leadership Skills, Others',
    image: '',
    message: 'The Vice-Chancellor Consistent University Professor Nike Obe has urged participant to use the opportunities that will be coming their way to the very best during the Leadership Training Programme...'
  },
  {
    id: 2,
    topic: 'SUG commissions a New Lecture Facility',
    image: '',
    message: 'Student Union Government commissioned a new lecture facility in the main complex of college of technology to enhance students ease in quality lecture delivery and further the promise to deliver an optimal service with the opportunity to serve their counterparts. '
  },
  {
    id: 3,
    topic: 'SUG commissions a New Lecture Facility',
    image: '',
    message: 'Student Union Government commissioned a new lecture facility in the main complex of college of technology to enhance students ease in quality lecture delivery and further the promise to deliver an optimal service with the opportunity to serve their counterparts. '
  }
]


const getNews = (news) => {
  return (
    news.map(news => (
      <li key={news.id} id="item">
        <div className="new-item">
          <div className="header">{news.topic}</div>
          <div className="message">{news.message}</div>
        </div>
      </li>
    ))
  )
}

export default () => (
  <div className="news">
  <h1>News</h1>
    <ul>
    {getNews(news)}
    </ul>
    <style jsx>
      {`
      .news {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        border: 4px solid #35185190;
      }
      h1 {
        margin-left: 40px;
      }
      ul {
        list-style-type: none;
      }
      li#item {
        margin: 10px;
      }
      `}
    </style>
  </div>
)