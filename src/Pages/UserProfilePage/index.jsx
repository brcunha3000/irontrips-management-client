import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                    {article.country.flag} {article.country.name.common}
                  </h2>
                  <h3>{article.generalComment}</h3>
                  <p>{article.review}</p>
                  <Link to={`/editArticle/${article._id}`}>
                    <button>Edit Article</button>
                  </Link>
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
      <div></div>
    </div>
  );
}

export default UserProfilePage;
