import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const API_URL = "https://irontrips-backend.onrender.com";

function UserProfilePage() {
    // Req body

    const [user, setUser] = useState(null);
    const storedToken = localStorage.getItem("authToken");

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

    return (
        <div>
            <div></div>
            <div>
                <Link to="/user-profile/newArticle">Create Article</Link>
            </div>
            <div>
                <div className="parent-profile-div">
                    {user && (
                        <div className="profile">
                            <h1>
                                PROFILE<span className="dot">.</span>
                            </h1>

                            <form>
                                <div className="imgProfile">
                                    <div>
                                        <img
                                            className="roundedImg"
                                            src={user.profilePicture}
                                            width={170}
                                        />
                                    </div>
                                    <div>
                                        <label>{user.username}</label>
                                    </div>
                                </div>
                                <div className="labelContainer">
                                    <label>
                                        <span className="profileTitles">
                                            Name:{" "}
                                        </span>
                                        {user.firstName} {user.lastName}
                                    </label>
                                    <label>
                                        <span className="profileTitles">
                                            Email:{" "}
                                        </span>
                                        {user.email}
                                    </label>
                                    <label>
                                        <span className="profileTitles">
                                            Nationality:{" "}
                                        </span>
                                        {user.nationality}
                                    </label>
                                    <label>
                                        <span className="profileTitles">
                                            Gender:{" "}
                                        </span>
                                        {user.gender}
                                    </label>
                                    <label>
                                        <p className="pProfile">
                                            <em>
                                                Member since{" "}
                                                {new Date(
                                                    user.createdAt
                                                ).toLocaleDateString()}
                                            </em>
                                        </p>
                                    </label>
                                </div>
                                <div className="btnContainer">
                                    <div>
                                        <Link to="/user-profile/edit">
                                            <button
                                                className="button-profile-card"
                                                type="submit"
                                            >
                                                EDIT PROFILE
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <div className="parent-profile-div">
                    {user && (
                        <div className="profile">
                            <h3>
                                Fun Facts<span className="dot">.</span>
                            </h3>
                        </div>
                    )}
                </div>
            </div>
            {/* Aqui */}
            <div>
                {user && (
                    <div>
                        <div className="landing">
                            <div className="points container">
                                <h3>Fun facts</h3>
                                {/* <p className="first">
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
                                </p> */}
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
                            {/* <div className="scrollmenu">
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
                            <h2 className="card__title">Colombia</h2>
                            <p className="card__description">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Rerum in labore laudantium
                              deserunt fugiat numquam.
                            </p>
                          </div>
                          <button className="card__button">Read more</button>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div> */}
                            <div className="container">
                                <h3>Visited Countries</h3>
                                <div className="scrollmenu">
                                    {user.visitedCountries.map((country) => {
                                        return (
                                            <div key={country._id}>
                                                <img
                                                    className="countriesImg"
                                                    src={country.flags.png}
                                                    width={80}
                                                    height={50}
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
