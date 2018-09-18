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
      <li key={news.id}>
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
  <h1>Welcome Address</h1>
  <hr />
  <img src="static/LAUTECH-VC.jpg" alt="VC"/>
  <p>The VC, Professor Nike Collins welcomes everyone to the great citadel of learning, he wishes everyone a wonderful stay during their prospective time in institution. He reinstates that his administration is very focus to make life better for everyone including the staffs.</p>
  <button>READ MORE📖</button>
  <style jsx>
    {`
    .news {
      border-radius: 0;
      border: 1px solid #35185190;
      margin-top: 2px;
      margin-bottom: 10px;
      padding: 5px;
      background: linear-gradient(transparent, #351851);
    }
    h1 {
      margin: 0;
      padding: 4px;
    }
    img {
      height:200px;
      width: 100%;

    }
    p {
      font-weight: 200;
      line-height:1.5;
      color: white
    }
    button {
      padding:4px;
    }


    `}
  </style>
  </div>
)