import { Link } from "react-router-dom";
import './globe.css'

function TheGlobePage() {
  return (
    <div className="main-div-globe">
      <div className="top-content-globe">
        <div>
          <a
            href="https://www.ironhack.com/pt/en/lisbon"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="top-content-globe-ironhack-logo"
              src="/images/ironhack-logo.png"
              alt="Ironhack Logo"
            ></img>
          </a>
        </div>
        <div className="top-content-globe-text">
        <br></br>
          <h2>Iron Trips - The World Globe</h2>
        </div>
      </div>
      <div>
        <div id="box"></div>
      </div>
      <div className="top-content-globe-text">
        <p>Plan your next trip, pick a continent</p>
      </div>
      <br></br>
      <div className="main-continent-div">
        <div className="continent-grid">
          <div className="continent-grid-image-item">
            <Link to="/asia">
              <img src="/images/asia.jpg" alt="asia"></img>
              <p className="text-overlay">Asia</p>
            </Link>
          </div>
          <div className="continent-grid-image-item">
            <Link to="/africa">
              <img src="/images/africa.jpg" alt="africa"></img>
              <span className="text-overlay">Africa</span>
            </Link>
          </div>
          <div className="continent-grid-image-item">
            <Link to="/europe">
              <img src="/images/europe.jpg" alt="europe"></img>
              <span className="text-overlay">Europe</span>
            </Link>
          </div>
          <div className="continent-grid-image-item">
            <Link to="/north-america">
              <img src="/images/north-america.jpeg" alt="north-america"></img>
              <span className="text-overlay">North America</span>
            </Link>
          </div>
          <div className="continent-grid-image-item">
            <Link to="/south-america">
              <img src="/images/south-america.jpg" alt="south-america"></img>
              <span className="text-overlay">South America</span>
            </Link>
          </div>
          <div className="continent-grid-image-item">
            <Link to="/south-america">
              <img src="/images/oceania.jpeg" alt="oceania"></img>
              <span className="text-overlay">Oceania</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheGlobePage;
