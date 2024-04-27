import React from "react";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";

const Header = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div
      className={`transition-all w-full flex items-center justify-between ${
        theme === "light" ? "bg-[#F5EFD6] text-black" : "bg-[#222] text-white"
      } pb-4 px-4`}
    >

      <div className="w-full">
        <ul className="flex flex-wrap justify-center md:justify-start">
          <li className="inline-block mx-2 my-2 md:my-0 text-lg cursor-pointer">
            <a href="https://ayushrajechak.netlify.app/">Portfolio</a>
          </li>
          <li className="inline-block mx-2 my-2 md:my-0 text-lg cursor-pointer">
            <a href="https://www.linkedin.com/in/ayush-raje-chak/">Linkedin</a>
          </li>
          <li className="inline-block mx-2 my-2 md:my-0 text-lg cursor-pointer">
            <a href="https://github.com/Darkcoder02">Github</a>
          </li>
        </ul>
      </div>

      <div>
      <img
        src={theme === "light" ? toggle_light : toggle_dark}
        className="w-[50px] cursor-pointer ml-2 md:ml-[40px] mt-2 md:mt-0"
        alt="dark mode toggle"
        onClick={() => {
          toggle_mode();
        }}
      />
      </div>
    </div>
  );
};

export default Header;
