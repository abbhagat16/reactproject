import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const links = [
    {
        name: "Home",
        path: "/",
  
    },
    {
         name: "Recpies",
         path: "/recpies",
        
    },
    {
        name: "Settings",
        path: "/settings",
       
    }

  ]

  return (
   <>
     <div className="navbar container">
      <a href="#" className="logo">
        F<span>oo</span>diesHub
      </a>
      <div className="nav-links">
        {
            links.map(link=>(
                <a href="{link.path}" key={link.name}>{link.name}</a>
            ))
        }
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
    <Sidebar links={links}/>
   </>
  );
}
