import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function CountryDetailsPage() {
  const [country, setCountry] = useState(null);
  const [fetching, setFetching] = useState(true);
  const { countryCode } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/theglobe/${countryCode}`)
      .then((response) => {
        const oneCountry = response.data;
        setCountry(oneCountry);
        setFetching(false);
      })
      .catch((error) => console.log(error));
  }, [countryCode, setCountry]);

  return (
    <div>
      {fetching && <p>Loading...</p>}
      {country && (
        <div>
          <h1>{country.name.common}</h1>
          <p>Favorites: {country.favorites}</p>
          <p>Capital: {country.capital}</p>
          <img src={country.flags.png} alt={country.name.common} />
          <a href={country.maps.googleMaps}>Maps</a>
        </div>
      )}
      <Link to="/theglobe">Back to The Globe</Link>
    </div>
  );
}

export default CountryDetailsPage;
