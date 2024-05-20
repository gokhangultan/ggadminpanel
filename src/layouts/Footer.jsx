import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from "react";
import { Button } from "reactstrap";
export default function Footer() {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email subscribed:", email);
  };
    return (
      <div className="py-3 primaryColor">
  <div>
      <div className=" flex flex-col sm:flex-row justify-between  gap-3 container items-center">
        <div className="flex gap-3">
          <a href="" target="_blank">
            <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2xl"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
          <a href="" target="_blank">
            <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
              <FontAwesomeIcon
                icon={faGlobe}
                size="2xl"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
          <a href="" target="_blank">
            <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
          <a href="" target="_blank">
            <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
              <FontAwesomeIcon
                icon={faPaperPlane}
                size="2xl"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
          <a href="" target="_blank">
            <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2xl"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
          <a href="" target="_blank">
            <button className="hover:text-white hover:bg-gray-300 rounded-full p-2">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2xl"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
        </div>
        <div className="flex flex-col gap-3">
            <h5 className="footer-title">Get In Touch</h5>
            <form onSubmit={handleSubmit} className="flex flex-row ">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleInputChange}
                className="pl-2 py-3 rounded-md border-1 border-[#E6E6E6] text-gray-500 bg-[#F9F9F9]"
              />
              <button
                type="submit"
                className="bg-[#203682] text-[#E6E6E6] rounded-md border-1 w-[117px] h-[58px] hover:bg-white hover:primary-text hover:border-[#203682]"
              >
                Subscribe
              </button>
            </form>
            <p className="secondary-text  text-xs leading-7">
              Lore imp sum dolor Amit
            </p>
          </div>
      </div>
  
      <h6 className="font-bold leading-6 text-sm flex justify-center text-white">
          Made With Love By Gokhan Gultan All Right Reserved
        </h6>
      
    </div>      </div>
    );
  }