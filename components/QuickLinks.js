export default () => (
  <div className="quick-link">
    <h1>Quick Links</h1>
    <hr />
    <div className="container">
      <p>Laboratories</p>
      <p>WorkShop</p>
      <p>Sport</p>
      <p>Bakery</p>
      <p>Acommodation</p>
      <p>Laboratories</p>
      <p>WorkShop</p>
      <p>Sport</p>
    </div>
    <style jsx>
      {`
        .quick-link {
          margin-top: 5px;
          height: 40vh;
          border: 1px solid #35185190;
          // border-radius: 5px;
          padding: 5px;
        }
        .container {
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        h1 {
          margin: 0;
          padding: 4px;
        }
        p {
          display: inline-block;
          background: red;
        }
        p:nth-child(2n) {
          background: #ffc600;
        }
      `}
    </style>
  </div>
)