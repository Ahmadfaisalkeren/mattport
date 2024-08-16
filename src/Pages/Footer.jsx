import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-4 bg-primary">
      <div className="md:flex justify-between">
        <div className="flex mb-4 md:mb-0 lg:mb-0 justify-center text-white mt-1">
          <span className="mr-2">
            <FaTelegram size={20}/>
          </span>
          <span className="mr-2">
            <FaFacebook size={20}/>
          </span>
          <span className="mr-2">
            <FaInstagram size={20}/>
          </span>
          <span className="mr-2">
            <FaTwitter size={20}/>
          </span>
          <span className="mr-2">
            <FaLinkedin size={20}/>
          </span>
        </div>
        <p className="text-center text-white font-semibold">
          Copyright &copy; 2024. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
