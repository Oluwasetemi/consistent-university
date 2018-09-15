import React from 'react'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'nuka-carousel'


library.add(faStroopwafel)

import Header from '../components/Header'
import News from '../components/News'
import QuickLink from '../components/QuickLinks'
import Notifications from '../components/Notifications'
import Events from '../components/Events'
import Publication from '../components/Publication'
import Footer from '../components/Footer'

const fixedHeight = {
  height: '500px'
}

class App extends React.Component {
  state = {
    slideIndex: 0
  };
  render() {
    const imgStyle = {
      height: '69vh',

    }
    return (
      <div className="wrapper">
      <Carousel dragging={true} transitionMode="fade" slideIndex={this.state.slideIndex}
      afterSlide={slideIndex => this.setState({ slideIndex })}>
        <img src="static/i1.png" style={imgStyle} />
        <img src="static/i2.png" style={imgStyle}/>
        <img src="static/i1.png" style={imgStyle}/>
        <img src="static/i2.png" style={imgStyle}/>
    </Carousel>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div className="container">
    <div className="header">
      <Header />
    </div>
    <div className="news">
      <News />
    </div>
    <div className="carousel">
      <App />
    </div>
    <div className="quick-link"><QuickLink /></div>
    <div className="notification"><Notifications /></div>
    <div className="event"> <Events /></div>
    <div className="publication">
      <Publication />
    </div>
    <div className="footer">
      <Footer />
    </div>
    <style jsx>
      {`

        .container {
          display: grid;
          grid-template-areas: "h h h h" "c c c n" "q no no e" "p p p p" "f f f f";
        }

        .header {
          grid-area:  h;
          margin: 0;
        }

        .news {
          grid-area:  n;
          // z-index: 10;
        }
        .carousel {
          grid-area:  c;
          width: 62vw;
          padding: 0;
        }
        .quick-link {
          grid-area:  q;
        }
        .notification {
          grid-area:  no;
        }
        .event {
          grid-area: e;
        }
        .publication {
          grid-area: p;
        }
        .footer {
          grid-area: f;
        }
      `}
    </style>
  </div>
    )
  }
}

export default Index