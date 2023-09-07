import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UserProfileEdit.css";

const API_URL = "http://localhost:5005";

function UserProfilePage() {
    // Req body

    const [user, setUser] = useState(null);
    const storedToken = localStorage.getItem("authToken");
    // Fun facts
    const [visitedWorld, setVisitedWorld] = useState(0);
    const [nVisitedCountries, setNVisitedCountries] = useState(0);
    const [nFavCountries, setNFavCountries] = useState(0);

    useEffect(() => {
        axios
            .get(`${API_URL}/user-profile`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
            .then((response) => {
                const oneUser = response.data;
                setUser(oneUser);
                const nVisited = oneUser.visitedCountries.length;
                setVisitedWorld(Math.floor((nVisited * 100) / 195));
                setNVisitedCountries(nVisited);
                setNFavCountries(oneUser.favoritesCountries.length);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setUser, storedToken]);

    console.log(user);

    return (
        <div>
            <div>
                <Link to="/user-profile/edit">Edit Profile</Link>
            </div>
            <div>
                <Link to="/user-profile/newArticle">Create Article</Link>
            </div>
            {/* Aqui */}
            <div>
                {user && (
                    <div>
                        <div className="wrapper">
                            <div className="user-card">
                                <div className="user-card-img">
                                    <img
                                        src={user.profilePicture}
                                        alt=""
                                        width={80}
                                    />
                                    <p>{user.username}</p>
                                </div>
                                <div className="user-card-info">
                                    <h2>
                                        {user.firstName} {user.lastName}
                                    </h2>
                                    <p>
                                        <span>Email:</span> {user.email}
                                    </p>
                                    <p>
                                        <span>Location:</span> Palestine, Gaza
                                        Strip
                                    </p>
                                    <p>
                                        <span>Occupation:</span> Web Developer
                                    </p>
                                    <p>
                                        <span>About me:</span> Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="landing">
                            <div className="points container">
                                <h3>Fun facts</h3>
                                <p className="first">
                                    You've visited<span> {visitedWorld}% </span>{" "}
                                    of the
                                    <span> world!</span>
                                </p>
                                <p className="second">
                                    You've visited
                                    <span> {nVisitedCountries} </span>
                                    <span> countries!</span>
                                </p>
                                <p className="second">
                                    You've<span> {nFavCountries} </span>{" "}
                                    favorite
                                    <span> countries!</span>
                                </p>
                            </div>
                            <div className="container">
                                <h3>Articles</h3>
                                <div className="scrollmenu">
                                    {user.articles.map((article) => {
                                        return (
                                            <div key={article._id}>
                                                <h2>
                                                    {article.generalComment}
                                                </h2>
                                                <h4>
                                                    {article.country.flag}{" "}
                                                    {
                                                        article.country.name
                                                            .common
                                                    }
                                                </h4>

                                                <Link
                                                    to={`/editArticle/${article._id}`}
                                                >
                                                    <div className="pulse">
                                                        <span className="material-symbols-outlined">
                                                            edit_note
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <h3>Favorites Countries</h3>
                            <div className="scrollmenu">
                                {user.favoritesCountries.map((country) => {
                                    return (
                                        <div key={country._id}>
                                            <article className="card">
                                                <img
                                                    className="card__background"
                                                    src={country.flags.svg}
                                                    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                                    width={1920}
                                                    height={2193}
                                                />
                                                <div className="card__content | flow">
                                                    <div className="card__content--container | flow">
                                                        <h2 className="card__title">
                                                            Colombia
                                                        </h2>
                                                        <p className="card__description">
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit.
                                                            Rerum in labore
                                                            laudantium deserunt
                                                            fugiat numquam.
                                                        </p>
                                                    </div>
                                                    <button className="card__button">
                                                        Read more
                                                    </button>
                                                </div>
                                            </article>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="container">
                                <h3>Visited Countries</h3>
                                <div className="scrollmenu">
                                    {user.visitedCountries.map((country) => {
                                        return (
                                            <div key={country._id}>
                                                <img
                                                    src={country.flags.png}
                                                    width={80}
                                                />
                                                <h2>{country.name.common}</h2>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserProfilePage;
