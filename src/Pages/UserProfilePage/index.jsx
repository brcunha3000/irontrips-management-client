import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/auth.context";
import ArticlePage from "../ArticlePage";

const API_URL = "http://localhost:5005";

function UserProfilePage() {
    // Req body
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState(null);
    // Logout
    const { logOutUser, tokenUpdate } = useContext(AuthContext);

    const navigate = useNavigate();
    /* const storedToken = localStorage.getItem("authToken"); */

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const getProfile = async () => {
        try {
            const storedToken = localStorage.getItem("authToken");

            const response = await axios.get(`${API_URL}/user-profile`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            });

            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        } catch (error) {
            console.log(error);
        }
    };

    const storedToken = localStorage.getItem("authToken");

    useEffect(() => {
        getProfile();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { firstName, lastName, email };
        try {
            const storedToken = localStorage.getItem("authToken");

            await axios.put(`${API_URL}/user-profile`, body, {
                headers: { Authorization: `Bearer ${storedToken}` },
            });
            setFirstName("");
            setLastName("");
            setEmail("");
            // Update token
            tokenUpdate();

            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProfile = async () => {
        try {
            const storedToken = localStorage.getItem("authToken");

            await axios.delete(`${API_URL}/user-profile`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            });

            logOutUser();

            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h3>Profile</h3>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <br />
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstName}
                />
                <br />
                <label>Second Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleLastName}
                />
                <br />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />
                <div>
                    <button type="submit">Save changes</button>
                    <button onClick={deleteProfile}>Delete Account ⚠️</button>
                </div>
            </form>
            <div>
                <Link to="/user-profile/newArticle">
                    <button>Create new Article</button>
                </Link>
            </div>
            <div>
                <h1>Articles</h1>
                <div>
                    {/* {user.articles.map((article) => (
                        <div key={article._id}>
                            <p>{article.generalComment}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage;
