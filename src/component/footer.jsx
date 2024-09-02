import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const footer = () => {
  return (
    <footer>
     
      <div className="container mt-8">
        <div className="row">
          {/* <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div> */}
          {/* <div className="col-md-4">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div> */}
          <div className="col-md-9  justify-center text-gray-500">
            <h4 className=" py-5 ">Follow me</h4>
            <ul className="flex flex-col justify-center items-center">
              <li>
                <a
                  href="https://web.facebook.com/profile.php?id=100080671479598"
                  target="_blank"
                >
                  <i className="flex flex-auto">
                    <FaFacebookSquare />
                      fajar affandi
                  </i>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/kawulaa36/" target="_blank">
                  <i className="flex flex-auto">
                    <FaInstagram /> kawulaa36
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-gray-500">
          <div className="col-md-12">
            <p>
              &copy; 2024 Affandy<i>edewe</i>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
