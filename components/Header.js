import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default () => (
  <nav>
    <div className="header">
      <Link href="/">
        <img src="/static/i4.png" alt="logo" width="355" height="120" />
      </Link>
      <b></b>
      <div className="additional-menu">
        <Link href="/my-account">
          <a style={linkStyle}>My Account</a>
        </Link>
        <Link href="/webmail">
         <a style={linkStyle}>Webmail</a>
        </Link>
        <Link href="/profiles">
          <a style={linkStyle}>Profiles</a>
        </Link>
      </div>
    </div>
    <div className="nav-menu">
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/admissions">
        <a style={linkStyle}>Admissions</a>
      </Link>
      <Link href="/colleges">
        <a style={linkStyle}>Colleges</a>
      </Link>
      <Link href="/library">
        <a style={linkStyle}>Library</a>
      </Link>
      <Link href="/news">
        <a style={linkStyle}>News</a>
      </Link>
      <Link href="/publications">
        <a style={linkStyle}>Publications</a>
      </Link>
      <Link href="/research">
        <a style={linkStyle}>Research</a>
      </Link>
      <Link href="/academics-calender">
        <a style={linkStyle}>Academics Calender</a>
      </Link>
    </div>
    <style jsx>{`
    .nav-menu {
      margin-bottom: 20px;
      padding: 10px;
      background-color: #351851;
      display: flex;
      justify-content: center;
    }
    .nav-menu a {
      text-decoration: none;
      padding: 20px;
      color: white;
    }

    .nav-menu a:hover {
      color: #351851;
      background-color: white;
      transform: scale(1.2);
    }

    .header {
      display: grid;
      grid-template-columns: auto 1fr 300px;
      align-item: center;
      margin-bottom: 5px;
    }
    .additional-menu a {
      text-decoration: none;
      color: white;
    }

    .additional-menu {
      height: 120px;
      background-color: #351851;
      grid-column: 3 / -1;
      display:grid;
      grid-template-columns: repeat(3, 100px);
      align-content: center;
    }
    b {
      height: 120px;
      background-color: #351851;
    }
    img:hover {
      cursor: pointer;
    }

    `}</style>
  </nav>

)