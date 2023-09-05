import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function CountryDetailsPage() {
    const [country, setCountry] = useState(null);
    const [fetching, setFetching] = useState(true);
    const { countryCode } = useParams();
    const storedToken = localStorage.getItem("authToken");

    // Add to favourites
    const addToMyFavorites = () => {
        axios
            .post(`${API_URL}/theglobe/addFavorites/${countryCode}`, "", {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then(() => {
                axios
                    .get(`${API_URL}/theglobe/${countryCode}`, "", {
                        headers: { Authorization: `Bearer ${storedToken}` },
                    })
                    .then((response) => {
                        const updateCountry = response.data;
                        setCountry(updateCountry);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Add to favourites
    const addToMyVisited = () => {
        axios
            .post(`${API_URL}/theglobe/addVisited/${countryCode}`, "", {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then(() => {
                axios
                    .get(`${API_URL}/theglobe/${countryCode}`, "", {
                        headers: { Authorization: `Bearer ${storedToken}` },
                    })
                    .then((response) => {
                        const updateCountry = response.data;
                        setCountry(updateCountry);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                console.log(error);
            });
    };

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

                    <button onClick={addToMyFavorites} type="submit">
                        Add favorites
                    </button>
                    <button onClick={addToMyVisited} type="submit">
                        Add visited
                    </button>
                </div>
            )}
            <Link to="/theglobe">Back to The Globe</Link>
        </div>
    );
}

export default CountryDetailsPage;
