import axios from "axios";
import './community.css'
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005";

function CommunityPage() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    axios
    .get(`${API_URL}/community`)
    .then((response) => {
      const allUsers = response.data;
      setUsers(allUsers);
    });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <div>
      <div className="top-content-community">
        <div>
          <h2>Iron Trips - The Community</h2>
        </div>
      </div>
      <div className="community-box">
        <div>
          <div className="find-user-box">
            <form>
              <label>
                Search for an user
                <input
                  name="searchUser"
                  type="text"
                  onChange={(e) => setSearchUser(e.target.value)}
                  value={searchUser}
                ></input>
              </label>
            </form>
          </div>
          <div className="find-user-content">
            {filteredUsers.map((user) => {
              return (
                <div key={user._id}>
                  <div>
                    <img style={{ height: "50px" }} src={user.profilePicture} />
                  </div>
                  <div>
                    <p>
                      Name: {user.firstName} {user.lastName}
                    </p>
                    <p>Username: {user.username}</p>
                    <p>Visited Countries: {user.visitedCountries.length}</p>
                    <p>
                      Member Since:{" "}
                      {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                    <p>
                      Last Visit:{" "}
                      {new Date(user.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
