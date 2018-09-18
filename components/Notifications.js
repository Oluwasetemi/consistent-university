export default () => (
  <div className="notification">
    <h1>Events</h1>
    <hr />
    <p>SENATE - Sep 20, 2018</p>
    <hr />
    <p>Late Registration with Penalty Ends for Fresh Undergraduate Students - Sep 21, 2018</p>
    <hr />
    <p>Students' Monthly Environmental Sanitation - Sep 22, 2018</p>
    <hr />
    <p>Test (1) - All Students - Sep 24, 2018</p>
    <hr />
    <p>16th Inaugural Lecture - Sep 28, 2018</p>
    <style jsx>
      {`
        .notification {
          margin-top: 5px;
          height: 40vh;
          border: 1px solid #35185190;
          // border-radius: 5px;
          padding: 5px;
          background: linear-gradient(transparent, #351851);
        }
        h1 {
          margin: 0;
          padding: 4px;
        }
        p {
          font-weight: 200;
          line-height:1.5;
          color: white
        }
      `}
    </style>
  </div>
)