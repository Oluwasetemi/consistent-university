import React from 'react'
import Carousel from 'nuka-carousel'

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
      height: '485px',
    }
    return (
      <div className="wrapper">
      <Carousel dragging={true} transitionMode="fade" slideIndex={this.state.slideIndex}
      afterSlide={slideIndex => this.setState({ slideIndex })}>
        <img src="static/i1.jpeg" style={imgStyle} />
        <img src="static/i2.jpeg" style={imgStyle} />
        <img src="static/i3.jpeg" style={imgStyle} />
        <img src="static/i4.jpeg" style={imgStyle} />
        <img src="static/i5.jpeg" style={imgStyle} />
        <img src="static/i6.jpeg" style={imgStyle} />

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
          font-weight: 200;
          display: grid;
          grid-template-areas: "h h h h" "c c c n" "q no no e" "p p p p" "f f f f";
        }

        .header {
          grid-area:  h;
          margin: 0;
        }

        .news {
          grid-area:  n;
          width: 380px;
          height: max-content;
          // z-index: 10;
        }
        .carousel {
          grid-area:  c;
          padding: 0;
          margin: 0;
          width: 930px;
          height: 70vh;
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

        @media all and (max-width: 1200px) {
          .carousel {
            width: 750px;
          }

        }

        @media all and (max-width: 960px) {
          .container {
            display: block;
          }
          .carousel {
            margin-bottom: 60px;
          }
          .container> * {
            width: 100%;
          }
          .nav-menu {
            font-size:10px;
          }
        }
      `}
    </style>
  </div>
    )
  }
}

export default Index