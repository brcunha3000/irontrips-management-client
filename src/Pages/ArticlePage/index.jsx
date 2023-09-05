/* const {
    generalComment,
    review,
    overall,
    cost,
    gallery,
    country,
    user, */

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function ArticlePage() {
    // State Declaration
    const [generalComment, setGeneralComment] = useState("");
    const [review, setReview] = useState("");
    const [overall, setOverall] = useState(0);
    const [cost, setCost] = useState("");
    const [gallery, setGallery] = useState("");
    // Use states
    const [countryCode, setCountryCode] = useState("");
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const storedToken = localStorage.getItem("authToken");

    useEffect(() => {
        axios
            .get(`${API_URL}/user-profile`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then((response) => {
                const currentUser = response.data;
                setUser(currentUser);
            })
            .catch((error) => console.log(error));
    }, [storedToken]);

    // Handle Submit Function
    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = {
            generalComment,
            review,
            overall,
            cost,
            gallery,
            countryCode,
        };

        axios
            .post(`${API_URL}/user-profile/newArticle`, requestBody, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then(() => {
                setGeneralComment("");
                setReview("");
                setOverall(0);
                setCost("");
                setGallery("");
                setCountryCode("");
            })
            .catch((error) => console.log(error));

        navigate("/user-profile");
    };
    return (
        <div>
            <h1>articles</h1>
            {user && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Country:
                        {/* <select name="countryCode">
                            {user.visitedCountries.map((country) => (
                                <option key={country._id} value={country.cca2}>
                                    {country.name.common}
                                </option>
                            ))}
                        </select> */}
                        <input
                            type="text"
                            name="countryCode"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                        />
                    </label>
                    <label>
                        Comment:
                        <input
                            type="text"
                            name="generalComment"
                            value={generalComment}
                            onChange={(e) => setGeneralComment(e.target.value)}
                        />
                    </label>
                    <label>
                        Review:
                        <input
                            type="text"
                            name="review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                    </label>
                    <label>
                        Overall:
                        <input
                            type="number"
                            name="overall"
                            value={overall}
                            onChange={(e) => setOverall(e.target.value)}
                            min="1"
                            max="10"
                        />
                    </label>
                    <label>
                        Cost:
                        <select
                            name="cost"
                            onChange={(e) => setCost(e.target.value)}
                        >
                            <option value="Budget-Friendly">
                                Budget-Friendly
                            </option>
                            <option value="Moderate">Moderate </option>
                            <option value="Expensive">Expensive</option>
                            <option value="Luxury">Luxury</option>
                        </select>
                    </label>
                    <label>
                        Gallery:
                        <input
                            type="text"
                            name="gallery"
                            value={gallery}
                            onChange={(e) => setGallery(e.target.value)}
                        />
                    </label>

                    <button type="submit">Create a New Article</button>
                </form>
            )}
        </div>
    );
}

export default ArticlePage;
