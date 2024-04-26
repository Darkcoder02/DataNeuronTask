import React from 'react'
import logo_light from '../assets/logo-black.png'
import logo_dark from '../assets/logo-white.png'
import search_icon_light from '../assets/search-b.png'
import search_icon_dark from '../assets/search-w.png'
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'

const Header = ({theme, setTheme}) => {
    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div className={` transition-all w-full flex items-center justify-between ${theme==='light' ? 'bg-white text-black':'bg-[#222] text-white'} pb-4 px-4`}>
        <img className="w-[160px] cursor-pointer" src={theme=='light' ? logo_light: logo_dark}/>

        <ul className="flex-1 no-underline flex flex-wrap items-center justify-center md:justify-start">
        <li className="inline-block mx-2 my-2 md:my-0 text-lg cursor-pointer"><a href="https://ayushrajechak.netlify.app/">Portfolio</a></li>
        <li className="inline-block mx-2 my-2 md:my-0 text-lg cursor-pointer"><a href="https://www.linkedin.com/in/ayush-raje-chak/">Linkedin</a></li>
        <li className="inline-block mx-2 my-2 md:my-0 text-lg cursor-pointer"><a href="https://github.com/Darkcoder02">Github</a></li>
      </ul>

        <div className={`flex items-center  px-[20px] py-[10px] ${theme=='light' ?'bg-[#242424]':'bg-[#fff]'} rounded-[50px]`}>
            <input type='text' placeholder='Search' className={`p-2 bg-transparent border-0 outline-0 text-white text-lg max-w-[200px] ${theme=='light'?'text-white placeholder-white':'text-black placeholder-black'}`}/>
            <img className="w-[20px] cursor-pointer" src={theme=='light' ? search_icon_dark:search_icon_light} />
        </div>

        <img src={theme=='light' ? toggle_light : toggle_dark} className='w-[50px] cursor-pointer ml-[40px]' onClick={()=>{toggle_mode()}}/>
    </div>
  )
}

export default Header