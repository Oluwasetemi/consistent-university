

export default () => (
  <div>
    <b></b>
    <span>&copy; Consistent University</span><br />
    <span>Made with 💖💖💖 by Nike Obe</span>
    <style jsx>
      {`
        div {
          font-weight: 200;
          padding: 20px;
          border-top: 15px solid rgb(36, 255, 20);
          background: #351851;
          color: white;
        }
        div:before {
          display: block;
          content: "";
          height: 15px;;
          background: linear-gradient(90deg, #48ded4 0%, #a026bf 20%, #e82c75 60%, #FFC40E 85%, #48ded4 95%);
        }
      `}
    </style>
  </div>
)