import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <div>
    <Header />
    <h1>Colleges</h1>
    <p>
    College of Business and Social Sciences
    </p>
    <p>College of Engineering
    </p>
    <p>College of Leadership Development Studies
    </p>
    <p>College of Science and Technology
    </p>
    <p>School of Postgraduate Studies</p>
    <Footer />
    <style jsx>
   {` h1 {
      font-size:2.5em;
      font-weight: 400;
      padding: 20px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;;
      grid-gap: 30px;
      align-items: center;
      margin-top: -10px;
      margin-bottom: -10px;
    }

    h1:before, h1:after {
      display: block;
      content: '';
      height: 20px;
      background: linear-gradient(to var(--direction, left), #351851, transparent );
    }

    h1:after {
      --direction: right;
    }`}
    </style>
  </div>
)