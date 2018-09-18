export default () => (
  <div className="quick-link">
    <h1>Quick Links</h1>
    <div className="container">
      <p>Laboratories</p>
      <p>WorkShop</p>
      <p>Sport</p>
      <p>Bakery</p>
      <p>Acommodation</p>
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
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10px;
        }
        p {
          display: inline-block;
        }
        p:nth-child(2n) {

        }
      `}
    </style>
  </div>
)