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
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function ArticlePage() {
    // State Declaration
    const [generalComment, setGeneralComment] = useState("");
    const [review, setReview] = useState("");
    const [overall, setOverall] = useState(0);
    const [cost, setCost] = useState("");
    const [gallery, setGallery] = useState("");
    // Get from URL
    const { countryCode } = useParams();

    const navigate = useNavigate();

    const storedToken = localStorage.getItem("authToken");

    // Handle Submit Function
    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = {
            generalComment,
            review,
            overall,
            cost,
            gallery,
        };

        axios
            .post(
                `${API_URL}/user-profile/newArticle/${countryCode}`,
                requestBody,
                {
                    headers: { Authorization: `Bearer ${storedToken}` },
                }
            )
            .then(() => {
                setGeneralComment("");
                setReview("");
                setOverall(0);
                setCost("");
                setGallery("");
            })
            .catch((error) => console.log(error));

        navigate("/user-profile");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                        <option value="Budget-Friendly">Budget-Friendly</option>
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
        </div>
    );
}

export default ArticlePage;
