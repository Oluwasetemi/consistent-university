import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <div>
    <Header />
    <h1>About</h1>
    <p>An Assignment to ...</p>
    <p>An Assignment to ...</p>
    <p>An Assignment to ...</p>
    <p>An Assignment to ...</p>
    <p>An Assignment to ...</p>
    <p>An Assignment to ...</p>
    <p>An Assignment to ...</p>
    <p>An Assignment to ...</p>
    <p>An Assignment to ...</p>
    <Footer />
    <style jsx >
      {`h1 {
        font-size:2.2em;
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr auto 1fr;;
        grid-gap: 30px;
        align-items: center;
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

      p {
        padding: 20px;
        background: linear-gradient(to var(--direction, left), var(--yellow, red), transparent );
        border-radius: 5px;
        font-size:1.2em;
        font-weight: 300;
      }

      p:nth-child(2n) {
        --yellow: #ffc600;
        --direction: right;
      }

     `}
    </style>
  </div>
)