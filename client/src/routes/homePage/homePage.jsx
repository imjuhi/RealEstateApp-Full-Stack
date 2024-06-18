import "./homePage.scss";
import SearchBar from "../../components/searchbar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi hic unde quis omnis dolorum. Itaque, reprehenderit
            assumenda soluta magnam provident corporis accusamus maxime ullam
            excepturi libero nulla vitae repudiandae!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
