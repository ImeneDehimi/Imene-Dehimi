import NavBar from "../navbar/NavBar";
import SideNav from "../sidenav/SideNav";
import "./Work.css";
import website1 from "./../../assets/handyman.png"
import website2 from "./../../assets/scotish.png"
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <div className="container">
        <SideNav></SideNav>
        <div className="main">
          <NavBar></NavBar>
          <div className="work">
            <h2>My work</h2>
            <span className="short-line"></span>
            <div className="site site1">
            <Link target="blank" to={"https://handyman-home-services.netlify.app/"}>
              <div className="preview">               
                <img src={website1} alt="" />
              </div>
              </Link>
              <div className="text">
                <h5>Handyman Home Services</h5>
                <p>
                  Handyman home services is a website dedicated
                  to provide comprehensive home repair and maintenance
                  solutions. It offers a detailed overview of the services
                  available, including plumbing, electrical work, building, and
                  painting.
                </p>
              </div>
            </div>
            <div className="site">
              <div className="text">
                <h5>Scottish</h5>
                <p>
                 Scottish is a home page for a cafe & restaurant where you can find
                 different sections displaying information about it.
                </p>
              </div>
              <Link target="blank" to={"https://handyman-home-services.netlify.app/"}>
              <div className="preview">               
                <img src={website2} alt="" />
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
