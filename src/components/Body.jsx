import React, { useEffect, useRef } from "react";
import "./Body.css";
import SplitTextJS from "split-text-js";
import gsap from "gsap";

const Body = ({ theme, setTheme }) => {
  const titlesRef = useRef(null);

  useEffect(() => {
    const titles = titlesRef.current.querySelectorAll("p");
    const tl = gsap.timeline({ repeat: -1 }); 

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.1,
        },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.07,
        },
        "<1"
      );
    });

    return () => {
      tl.kill(); 
    };
  }, [theme]); 

  return (
    <div className="flex items-center justify-center">
      <div ref={titlesRef}>
        <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
          UI designer
        </p>
        <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
          Learner
        </p>
        <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
          Frontender
        </p>
        <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
          Marketer
        </p>
        <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
          Developer
        </p>
      </div>
    </div>
  );
};

export default Body;
