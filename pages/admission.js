import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <div>
    <Header />
    <h1>Admissions</h1>
    <div className="content">
    <p title="Prospective">Prospective</p>
    <p title="Tour Guide guide">Tour Guide</p>
    <p title="UNDERGRADUATE"> UNDERGRADUATE </p>
    <p title="POSTGRADUATE">POSTGRADUATE</p>
    </div>
    <Footer />
    <style jsx>
    {`h1 {
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
    }

    .content {
      margin-top: -25px;
      display: grid;
      grid-auto-flow: column;
    }

    p {
      text-align:center;
      text-transform: uppercase;
      width: 20vw;
      padding: 20px;
      background: red;
      border-radius: 5px;
      font-size:1.2em;
      font-weight: 300;
      line-height: 10;
    }

    p:nth-child(2n) {
      background: #ffc600;
    }

   `}
    </style>
  </div>
)