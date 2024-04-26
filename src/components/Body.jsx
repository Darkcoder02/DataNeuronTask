import React, { useEffect } from "react";
import "./Body.css";
import SplitTextJS from "split-text-js";
import gsap from "gsap";

const Body = ({theme, setTheme}) => {
  const titles = gsap.utils.toArray("p");
  const tl = gsap.timeline();

  titles.forEach((title) => {
    const splitTitle = new SplitTextJS(title);
    tl.from(
      splitTitle.chars,
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.5,
      },
      "<"
    ).to(
      splitTitle.chars,
      {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.5,
      },
      "<1"
    );
  });
  return (
    <div className="flex h-[350px] items-center justify-center">
      <div>
        <p className={`${theme==='light'?'text-black':'text-white'}`}>odit</p>
        <p className={`${theme==='light'?'text-black':'text-white'}`}>Lorem</p>
        <p className={`${theme==='light'?'text-black':'text-white'}`}>ipsum</p>
        <p className={`${theme==='light'?'text-black':'text-white'}`}>Inventore</p>
        <p className={`${theme==='light'?'text-black':'text-white'}`}>adipisicing</p>
      </div>
    </div>
  );
};

export default Body;
