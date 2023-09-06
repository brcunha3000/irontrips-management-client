function TheGlobePage() {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    switch (selectedValue) {
      case "1":
        window.location.href = "/asia";
        break;
      case "2":
        window.location.href = "/africa";
        break;
      case "3":
        window.location.href = "/europe";
        break;
      case "4":
        window.location.href = "/south-america";
        break;
      case "5":
        window.location.href = "/north-america";
        break;
      case "6":
        window.location.href = "/oceania";
        break;
    }
  };

  return (
    <div>
      <div className="top-content-community">
        <div>
          <a
            href="https://www.ironhack.com/pt/en/lisbon"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="top-content-community-ironhack-logo"
              src="./public/images/ironhack-logo.png"
              alt="Ironhack Logo"
            ></img>
          </a>
        </div>
        <div>
          <h2>Iron Trips - The World Globe</h2>
        </div>
      </div>
      <div>
        {/*<div>
          <img
            src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/11/mapa-mundi-indicando-os-seis-continentes-da-terra.jpg"
            alt="World Map"
          />
        </div>*/}
        <div id="box"></div>
        <div>
        <form action="#">
            <div className="select-box">
              <label htmlFor="select-box1" className="label select-box1">
                <span className="label-desc">Pick the continent</span>{" "}
              </label>
              <select
                id="select-box1"
                className="select"
                onChange={handleSelectChange}
              >
                <option selected value="">Select the continent</option>
                <option value="1">Asia</option>
                <option value="2">Africa</option>
                <option value="3">Europe</option>
                <option value="4">South America</option>
                <option value="5">North America</option>
                <option value="6">Oceania</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
    /*<div className="globe-page-main-container">
      <div className="globe-page-layout">
        <div>
          <img
            src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/11/mapa-mundi-indicando-os-seis-continentes-da-terra.jpg"
            alt="World Map"
          />
        </div>
        <div className="globe-page-continent-selector">
          <form action="#">
            <div className="select-box">
              <label htmlFor="select-box1" className="label select-box1">
                <span className="label-desc">Pick the continent</span>{" "}
              </label>
              <select
                id="select-box1"
                className="select"
                onChange={handleSelectChange}
              >
                <option selected value="">Select the continent</option>
                <option value="1">Asia</option>
                <option value="2">Africa</option>
                <option value="3">Europe</option>
                <option value="4">South America</option>
                <option value="5">North America</option>
                <option value="6">Oceania</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>*/
  );
}

export default TheGlobePage;
