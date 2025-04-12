import {Menu, X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { navItems } from "../constants/info";

const Navbar = () => {
   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

   const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
   };

  return (
    <nav className="sticky top-0 z-50 py-6 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <img className="h-14 w-14 mr-2" src={logo} alt="logo" />
                <span className="text-xs sm:text-sm md:text-base  lg:text-base  xl:text-lg tracking-tight ">RSP (Reclutamiento y Seleccion de Personal)</span>
            </div>
            <ul className="hidden lg:flex ml-3 xl:space-x-9 lg:space-x-5">
                {navItems.map((item , index ) => (
                  <li key={index}>
                    <a className="lg:text-sm  xl:text-base" href={item.href}>{item.label}</a>
                  </li>
                ))}
            </ul>
            <div className="hidden lg:flex justify-center xl:space-x-4 items-center lg:space-x-2  ">
               <a href="#" className="py-2 px-3 border rounded-md   md:text-xs lg:text-sm xl:text-base "> 
                  Inicia Sesion
               </a>
               <a href="#" className="bg-gradient-to-r from-green-500 to-green-600 text-white
               py-2 px-3 rounded-md   md:text-xs lg:text-sm xl:text-base">
                 Registrate
               </a>
            </div>
             <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar}>
                   {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
             </div>
            </div>
            {mobileDrawerOpen && (
              <div className="fixed right-0 z-20 bg-gray-50 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                 <ul>
                   {navItems.map((item, index) => (
                     <li key={index} className="py-4">
                       <a href={item.href}>{item.label}</a>
                     </li>
                   ))}
                 </ul>
                  <div className="flex space-x-6 py-5">
                    <a href="#" className="py-2 px-3 border rounded-md">
                       Inicia Sesion
                    </a>
                    <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r  
                    from-green-500 to-green-700 text-white">
                       Registrate
                    </a>
                  </div>
              </div>
            )}
     </div>
    </nav>
  );
};

export default Navbar