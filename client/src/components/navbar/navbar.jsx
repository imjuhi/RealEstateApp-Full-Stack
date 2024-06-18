import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [open, setopen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/my-logo.png" alt="" />
        </a>
        <a href="/" className="left-content">
          Home
        </a>
        <a href="/" className="left-content">
          About
        </a>
        <a href="/" className="left-content">
          Contact
        </a>
        <a href="/" className="left-content">
          Agents
        </a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile-link">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login" className="signin-link">
              Sign in
            </Link>
            <Link to="/register" className="signup-link">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setopen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
