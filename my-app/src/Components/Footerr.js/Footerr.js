import React from 'react'


export default function Footerr() {
    return(
      
       <div className="h-[97px] bg-slate-600 mt-9 ">
        <div className=" text-white text-center  ">
          <h1 className="text-4xl">LOGO</h1>
        </div>
        <div className="text-white list-none self-center space-x-4 mr-14 flex justify-center">
         <a href='#'>About</a>
         <a href='#'>Privacy Policy</a>
         <a href='#'>Licensing</a>
         <a href='#'>Contact</a>
         
        </div>
        <hr/>
        <h1 className="text-center text-white mt-1">© 2022Flowbite™</h1>
       </div>

    )
}