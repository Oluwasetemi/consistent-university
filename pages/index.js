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
import Footer from '../components/Footer'

class App extends React.Component {
  state = {
    slideIndex: 0
  };
  render() {
    return (
      <Carousel dragging={true} autoplay={true} transitionMode="fade" slideIndex={this.state.slideIndex}
      afterSlide={slideIndex => this.setState({ slideIndex })}>
        <img src="static/i1.png"/>
        <img src="static/i2.png"/>
        <img src="static/i1.png"/>
        <img src="static/i2.png"/>
    </Carousel>
    )
  }
}

export default () => (
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
    <div className="footer">
      <Footer />
    </div>
    <style jsx>
      {`

        .container {
          display: grid;
          grid-template-areas: "h h h h" "c c c n" "q no no e" "f f f f";
        }

        .header {
          grid-area:  h;
          margin: 0;
        }

        .news {
          grid-area:  n;
          z-index: 10;
        }
        .carousel {
          grid-area:  c;
          max-width: 60vw;
        }
        .quick-link {
          grid-area:  q;
        }
        .notification {
          grid-area:  no;
        }
        .event {
          grid-area: e
        }
        .footer {
          grid-area: f
        }
      `}
    </style>
  </div>
)