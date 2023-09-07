import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./globe.css";

const API_URL = "http://localhost:5005";

function TheGlobePage() {
  
  const {countryCode} = useParams
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState({});

  useEffect(() => {
    axios
    .get(`${API_URL}/theglobe/countries`)
    .then((response) => {
      const allCountries = response.data;
      setCountries(allCountries);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);
  
  
  
  useEffect(() => {
    if(countries.length > 0){
    const randomIndex = Math.floor(Math.random() * countries.length);
    
    const foundCountry = countries[randomIndex]
    
    setRandomCountry(foundCountry);
    console.log(foundCountry.cca2)}
  }, [countries, countryCode])
  

  

  return (
    <div className="main-div-globe">
      <div className="top-content-globe">
        <div className="top-content-globe-text">
          <br></br>
          <h2>Iron Trips - The World Globe</h2>
          <br></br>
        </div>
      </div>
      <div className="top-content-globe-text">
        <p>Plan your next travel, pick a continent</p>
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
      <div className="random-country-generator-div">
        <div className="random-country-generator-div-text">
          <p>Out of ideas? Just click on our country suggestion generator:</p>
        </div>
        <div>
        <Link to={`/theglobe/${randomCountry.cca2}`}>
          <div id="box"></div>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default TheGlobePage;
