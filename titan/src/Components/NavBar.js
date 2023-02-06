import React from "react";
import "../CSS/NavBar.css";
import logo from "../Images/Titan-Logo.png";
import logo2 from "../Images/IMG1.jpeg";
import logo3 from "../Images/Mahadev.jpg";
import logo4 from "../Images/lastlogo.png";
export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://titan.email/">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://titan.email/professional-email-features/"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://titan.email/partners/">
                  Partners
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Recourses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://titan.email/blog/"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://titan.email/careers/"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="https://titan.email/about/"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://apps.apple.com/us/app/titan-app-for-titan-accounts/id1486741447"
                    >
                      Titan For iOS
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://play.google.com/store/apps/details?id=email.titan.app"
                    >
                      Titan For Android
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://support.titan.email/hc/en-us"
                >
                  Help Center
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-5"
                type="search"
                placeholder="Partner With Us"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                id="signin"
              >
                <a href="https://app.titan.email/login/">SignIn</a>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="mainContainer">
        <p>
          The first Integrated Email,
          <br />
          built for the customers of Web <br /> Presence Providers
        </p>
      </div>
      <div className="secondContainer">
        <p>
          Increase profit 2x and give your customers a professional email <br />{" "}
          experience, integrated with your platform.
        </p>
      </div>
      <div className="btnMain">
        <button id="btn1">
          <a href="https://titan.email/contact/">Become a Titan partner</a>
        </button>
      </div>
      <div className="videoContainer">
        <video controls>
          <source src="https://youtu.be/RcUChtuBLh0" type="video/mp4" />
        </video>
      </div>
      <div className="thirdContainer">
        <p id="thirdPara">Increase email sales 2x with Integrated Email</p>
        <p id="fourPara">
          Titan drives a 2x lift in email attach rates by integrating with every
          surface of your <br /> ecosystem.
        </p>
      </div>
      <div className="mainImage">
        <a href="https://www.titancompany.in/">
          {" "}
          <img src={logo2} alt="Logo2" id="thirdImg" />
        </a>
      </div>
      <div id="cardContainer">
        <div className="fourContainer">
          <p id="ttcontain">
            "Titan has revolutionised business email <br /> for me. I don't need
            to pay for expensive <br /> services from other service providers in{" "}
            <br /> the market."
          </p>
          <img src={logo3} alt="logo3" id="myPic" />
          <span id="name1">
            {" "}
            NZANGI M <br /> BIM Coordinator & Technology
            <br /> Officer
          </span>
        </div>
        <div className="fourContainer3">
          <p id="tt2contain">
            "Titan is an apt name for such a superior <br /> email platform. It
            has proven to be <br /> customer responsive, easy to use, and a{" "}
            <br /> breath of fresh air. It stands heads & <br />
            shoulders above the rest."
          </p>
          <img src={logo3} alt="logo3" id="myPic" />
          <span>
            BRUCE FOSTER <br />
            Paper Engineer, Paperpops
          </span>
        </div>
        <div className="fourContainer2">
          <p id="tt3contain">
            "For a professional, easy to use,
            <br /> uncluttered email solution, Titan is <br /> definitely THE
            go-to option I would
            <br /> recommend!"
          </p>
          <img src={logo3} alt="logo3" id="myPic" />
          <span>
            KATHERINA T <br />
            President, Lokhorst Group <br /> Ventures
          </span>
        </div>
      </div>
      <div className="lastContainer">
        <p>
          Webhosts / Website builders looking to <br /> offer Titan to your
          customers?
        </p>
        <span id="lasttxt">
          Titan deeply integrates into your control panels.
        </span>
      </div>
      <a href="https://titan.email/partners/">
        <button id="btn3">See how Titan works with partners</button>
      </a>
      <div>
      <hr/>
        <img src={logo4} alt="logo4" id="lastlogo"/>
      </div>
      <div className="footerlogo1">
        <p> 2023 Titan</p>
      </div>

    </div>
  );
}
