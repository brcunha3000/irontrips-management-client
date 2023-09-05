import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function UserProfilePage() {
    // Req body

    const [user, setUser] = useState(null);
    const storedToken = localStorage.getItem("authToken");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API_URL}/user-profile`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then((response) => {
                const oneUser = response.data;
                setUser(oneUser);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setUser, storedToken]);

    const deleteArticle = (articleId) => {
        axios
            .delete(`${API_URL}/user-profile/${articleId}`)
            .then(() => {
                navigate("/user-profile");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {user && (
                <div key={user._id}>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <img src={user.profilePicture} width={100} />
                    <div>
                        <h1>Articles</h1>
                        {user.articles.map((article) => {
                            return (
                                <div key={article._id}>
                                    <h2>
                                        {article.country.flag}{" "}
                                        {article.country.name.common}
                                    </h2>
                                    <h3>{article.generalComment}</h3>
                                    <p>{article.review}</p>

                                    <button
                                        onClick={() =>
                                            deleteArticle(article._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            <div>
                <Link to="/user-profile/edit">Edit Profile</Link>
            </div>
            <div>
                <Link to="/user-profile/newArticle">Create Article</Link>
            </div>
        </div>
    );
}

export default UserProfilePage;
