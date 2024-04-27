import React from 'react'

const ButtonsContainer = ({theme, setTheme}) => {
  return (
    <div className="flex justify-around items-center pb-4 flex-wrap">
        <div className={`flex items-center  px-[20px] py-[10px] ${theme==='light' ?'bg-[#C1E1C1]':'bg-[#fff]'} rounded-[50px] sm:mb-2`}>
            <input type='text' placeholder='Add Data' className={`p-2 bg-transparent border-0 outline-0 text-lg max-w-[200px] ${theme==='light'?'text-black placeholder-black':'text-black placeholder-black'}`}/>
            <button className="bg-[#f1c49a] p-2 rounded-[50px]">Add</button>
        </div>
        <div className={`flex items-center  px-[20px] py-[10px] ${theme==='light' ?'bg-[#C1E1C1]':'bg-[#fff]'} rounded-[50px] sm:mb-2`}>
            <input type='text' placeholder='Update Data' className={`p-2 bg-transparent border-0 outline-0 text-lg max-w-[200px] ${theme==='light'?'text-black placeholder-black':'text-black placeholder-black'}`}/>
            <button className="bg-[#f1c49a] p-2 rounded-[50px]">Update</button>
        </div>
        <div className="bg-[#C1E1C1] p-6 rounded-xl sm:mb-2">
            <span className="text-2xl text-gray-700">Count</span>
        </div>
    </div>
  )
}

export default ButtonsContainer