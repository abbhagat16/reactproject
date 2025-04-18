import { useState } from "react";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="navbar container">
      <a href="#" className="logo">
        F<span>oo</span>diesHub
      </a>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Recpies</a>
        <a href="#">Links</a>
      </div>
      <div
        onClick={() => setSidebar(!sidebar)}
        className={sidebar ? "side-bar active" : "side-bar"}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
