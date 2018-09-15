import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


export default () => (
  <div>
    <b></b>
    <span>&copy; Consistent University</span>
    <b></b>
    <span className="social">

    <FontAwesomeIcon icon={['fab', 'facebook']} size="5x" />
    <FontAwesomeIcon icon={['fab', 'twitter']} />
    <FontAwesomeIcon icon={['fab', 'youtube']} />
    </span>

    <style jsx>
      {`
        div {
          display: grid;
          grid-template-columns: 100px 1fr 400px 1fr;
          height: 10vh;
        }
      `}
    </style>
  </div>
)