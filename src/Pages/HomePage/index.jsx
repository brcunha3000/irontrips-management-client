import { Link } from "react-router-dom"


function HomePage() {
  return (
    <div>
      <div id="box"></div>
      <div>
        <Link to={"/theglobe"}>
          <p>Globe</p>
        </Link>
      </div>
    </div>

  )
}

export default HomePage;
