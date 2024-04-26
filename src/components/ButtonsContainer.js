import React from 'react'

const ButtonsContainer = ({theme, setTheme}) => {
  return (
    <div className="flex justify-around items-center">
        <div className={`flex items-center  px-[20px] py-[10px] ${theme=='light' ?'bg-[#242424]':'bg-[#fff]'} rounded-[50px]`}>
            <input type='text' placeholder='Add Data' className={`p-2 bg-transparent border-0 outline-0 text-white text-lg max-w-[200px] ${theme=='light'?'text-white placeholder-white':'text-black placeholder-black'}`}/>
            <button className="bg-blue-500 p-2 rounded-md">Add</button>
        </div>
        <div className={`flex items-center  px-[20px] py-[10px] ${theme=='light' ?'bg-[#242424]':'bg-[#fff]'} rounded-[50px]`}>
            <input type='text' placeholder='Update Data' className={`p-2 bg-transparent border-0 outline-0 text-white text-lg max-w-[200px] ${theme=='light'?'text-white placeholder-white':'text-black placeholder-black'}`}/>
            <button className="bg-blue-500 p-2 rounded-md">Update</button>
        </div>
        <div className="bg-purple-300 p-4 rounded-xl">
            <span className="text-3xl">Count</span>
        </div>
    </div>
  )
}

export default ButtonsContainer