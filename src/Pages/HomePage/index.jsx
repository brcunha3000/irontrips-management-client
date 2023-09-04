import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function HomePage() {
  return (
    <div id="home">
      <div className="yellow-div">
        <div className="top-content">
          <div>
            <a
              href="https://www.ironhack.com/pt/en/lisbon"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="top-content-ironhack-logo"
                src="./public/images/ironhack-logo.png"
                alt="Ironhack Logo"
              ></img>
            </a>
          </div>
          <div className="home-page-text">
            <h1>Iron Trips</h1>
          </div>
        </div>
        <div className="bottom-content wrapper">
          <ScrollLink to="red-div" smooth={true} duration={500}>
            <h3>Who we are and what is our purpose</h3>
            <div className="scroll-container">
              <div className="scroller"></div>
            </div>
          </ScrollLink>
        </div>
      </div>

      <div className="red-div">
        <ScrollLink to="blue-div" smooth={true} duration={500}>
          Scroll to Blue Div
        </ScrollLink>
      </div>
      <div className="blue-div">
        <ScrollLink to="pink-div" smooth={true} duration={500}>
          Scroll to pink Div
        </ScrollLink>
      </div>
      <div className="pink-div">
        <ScrollLink to="brown-div" smooth={true} duration={500}>
          Scroll to brown Div
        </ScrollLink>
      </div>
      <div className="brown-div">
        <ScrollLink to="yellow-div" smooth={true} duration={500}>
          Back to top
        </ScrollLink>
      </div>

      <Link to={"/theglobe"}>
        <p>Globe</p>
      </Link>
    </div>
  );
}

export default HomePage;
