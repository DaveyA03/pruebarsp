import logoRsp from "../assets/logo.jpg";
 import { Mail } from "lucide-react";
 import { BsWhatsapp } from "react-icons/bs";
 import { FaLocationDot } from "react-icons/fa6";
 import { PiCalendarDots } from "react-icons/pi";
import { IoLogoTiktok } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";






const FooterRsp = () => {
  return (
    <footer className="py-6 bg-gray-100 text-gray-900 mt-52">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12  space-y-10 md:space-y-0">
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-14 h-12 ">
						<img src={logoRsp} alt="" className="  rounded-full border  border-green-200/40 shadow-2xl shadow-green-700" />
					</div>
					<span className="self-center text-2xl font-semibold">RSP | Selección de Personal</span>
				</a>

                   <div className="pt-20  md:pt-14 pl-5 space-y-3">
                     <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-11 h-11 bg-green-600 rounded-full">
                        <Mail  stroke="gray" fill="white"/>
                        </div>
                     
                     <h1>
                      <span className="font-semibold"> Correo:</span> gerenciarsp@hotmail.com 
                      </h1> 
                     </div>

                     <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-11 h-11 bg-green-600 rounded-full">
                        <BsWhatsapp  className="h-7 w-6" fill="white"/>
						</div>
                     
                     <h1>
                      <span className="font-semibold"> Teléfono:</span> 3008031702 - 3216143596 
                      </h1> 
                     </div>

                       
					 <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-11 h-11 bg-green-600 rounded-full">
						<FaLocationDot  className="h-6 w-6" fill="white" />

                        </div>
                     
                     <h1>
                      <span className="font-semibold"> Dirección:</span> Cl 56 Sur#36-11 Sabaneta
                      </h1> 
                     </div>

					  </div>
			</div>
		    	
			<div className="col-span-6 text-center md:text-left md:col-span-3  md:pl-12  ">
				<p className="pb-1 text-lg font-medium">Recursos</p>
				<ul className="mt-1">
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:text-emerald-600">Nosotros</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:text-emerald-600">Contacto</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:text-emerald-600">Servicios</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="https://linktr.ee/empleosrsp" target="_blank" className="hover:text-emerald-600">Grupos</a>
					</li>
					
				</ul>
			</div>
			<div className="col-span-6 md:col-span-3  flex flex-col items-start">
  <p className="pb-1 text-lg font-medium">Horarios</p>
  <div className="flex items-center gap-2 mt-2">
    <div className="w-11 h-11 bg-gray-200/60 rounded-full flex items-center justify-center">
      <PiCalendarDots className="w-6 h-7" />
    </div>
    <span>7:30 AM - 6:00 PM</span>
  </div>
</div>



		</div>
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2025 Todos los derechos reservados</span>
				<a rel="noopener noreferrer" href="#">
					<span>Politica de Privacidad</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terminos del Servicio</span>
				</a>
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
			  <a rel="noopener noreferrer" href="https://www.linkedin.com/in/rsp-reclutamiento-y-selecci%C3%B3n-de-personal-7970052a7/" title="LinkedIn" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-gray-50">
				<FaLinkedinIn  className="h-5 w-5"/>
				</a>
				<a rel="noopener noreferrer" href="https://www.facebook.com/empleosmedellin1" title="Facebook"  target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-gray-50">
				<FaFacebookF  className="h-5 w-5"/>
				</a>
				<a rel="noopener noreferrer" href="https://www.instagram.com/rsp_014/" title="Instagram" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-gray-50">
				<BsInstagram  className="h-5 w-5"/>
                 </a>
				<a rel="noopener noreferrer" href="https://www.tiktok.com/@rsp77_2?lang=es" title="TikTok" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-gray-50">
				<IoLogoTiktok  className="h-5 w-5"/>
				</a>
			</div>
		</div>
	</div>
</footer>
  )
}

export default FooterRsp