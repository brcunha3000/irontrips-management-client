import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function UserProfileEdit() {
    const [user, setUser] = useState("");
    // State Declaration
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [nationality, setNationality] = useState("");
    const [username, setUsername] = useState("");

    // Uses
    const storedToken = localStorage.getItem("authToken");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API_URL}/user-profile`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then((response) => {
                const currentUser = response.data;
                setUser(currentUser);
                setFirstName(currentUser.firstName);
                setLastName(currentUser.lastName);
                setEmail(currentUser.email);
                setGender(currentUser.gender);
                setNationality(currentUser.nationality);
                setUsername(currentUser.username);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [storedToken]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {
            firstName,
            lastName,
            email,
            gender,
            nationality,
            username,
        };
        axios
            .put(`${API_URL}/user-profile`, requestBody, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then(() => {
                // navigate === redirect
                navigate(`/user-profile`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteProfile = () => {
        axios
            .delete(`${API_URL}/user-profile`)
            .then(() => {
                navigate("/user-profile");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Gender:
                    <select
                        name="gender"
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female </option>
                        <option value="non-binary">Non binary</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">
                            Prefer not to say
                        </option>
                    </select>
                </label>
                <label>
                    Nationality:
                    <input
                        type="text"
                        name="nationality"
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                    />
                </label>

                <button type="submit">Edit Article</button>
            </form>

            <Link to={"/user-profile"}>Back</Link>
        </div>
    );
}

export default UserProfileEdit;
