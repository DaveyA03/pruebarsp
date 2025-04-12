import { useState , useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from '../constants/info';
import { categoryMethods } from '../constants/info';
import {motion} from "framer-motion";
import CountUp from 'react-countup';
import Review from "./Review";

{/*import imgvideo from "../assets/profile-pictures/pruebafb.jpg";*/}
import videoPortada from "../assets/rspjobadvices.mp4";


{/* imagen del llamado a subscribirse para dejar correo */ }
import emailsubs from "../assets/emailsub.png"

{/*  Importanciones de INFO De FAQ de CONSTS*/}

import { FAQ_DESCRIPTION } from "../constants/info";
 import { FAQS } from "../constants/info";
import { FaMinus, FaPlus } from "react-icons/fa";
 
 
import contactHM from "../assets/profile-pictures/contactsHome.png"

import { FiSend } from "react-icons/fi";


const Home = () => {

   {/* Funcionamiento del carrusel */}
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));  

  
  {/* Funcionamiento del video */ }
  const videoRef = useRef(null);
   
   {/*   Seccion de estadisticas */}
  const stats = [
    { value: 100000, label: 'Candidatos Alcanzados', showPlus: true },
    { value: 40, label: 'Reclutadores Calificados', showPlus: false },
    { value: 1000, label: 'Ofertas Publicadas', showPlus: true },
    { value: 15, label: 'Métodos de Reclutamiento', showPlus: false },
  ];

    {/*  Seccion funcionamiento de FAQS*/}
    
       const [activeIndex, setActiveIndex]  = useState(null);

       const handleToggleCT = (index) => {
         setActiveIndex(activeIndex === index  ? null: index);
       }


  return (
    <>

    {/*----------------------- Carrousel -----------------------*/}

    <div className="relative w-full h-[600px]   xl:h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 border border-gray-600 shadow-lg rounded-lg overflow-hidden">
  {/* Contenedor de texto a la izquierda */}
  <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center p-4 md:pl-12 md:pr-2 max-h-64 overflow-hidden ">
    <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 text-center">
      {slides[current].text}
    </h2>
    <p className="text-base md:text-lg text-green-600 font-semibold mt-2 md:mt-4 text-center">
      {slides[current].highlight}
    </p>
  </div>

  {/* Imagen a la derecha */}
  <div className="w-full md:w-1/2 h-1/2 md:h-full">
    <img
      src={slides[current].image}
      alt="Slide"
      className="w-full h-full object-cover "
    />
  </div>

  {/* Botón Izquierdo*/}
  <button
    className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full transition-all duration-300 hover:bg-white/95"
    onClick={prevSlide}
  >
    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
  </button>

  {/* Botón Derecho */}
  <button
    className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full transition-all duration-300 hover:bg-white/70"
    onClick={nextSlide}
  >
    <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
  </button>

  {/* Puntos de navegación */}
  <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 outline-none focus:ring-2 focus:ring-green-400 ${
          index === current ? "bg-green-400 md:w-4 md:h-4 scale-110" : "bg-gray-300"
        } cursor-pointer hover:scale-110`}
      />
    ))}
  </div>
</div>
  
      
       {/* --------- Fin del carrousel -----------*/}


         {/*-------------- inicio de los cards de metodos ----------------*/}

     <div className="pt-36 container max-w-screen-xl mx-auto">
      <div>
      <h1 className="text-3xl titles text-center">Nuestros enfoques estratégicos para soluciones de negocio</h1>
         </div>
      
       {/* div categorias */}
           <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-24">
             {
             categoryMethods.map((item, i) => (
                <div key={i} className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center
                    cursor-pointer hover:-translate-y-4 duration-300 transition-all">
                    <div className="flex w-full mx-auto items-center justify-center">
                      <img src={item.pic} alt="" className="bg-[#C1F1C6] p-5 rounded-full w-40 h-40" />
                    </div>
                    <div className="mt-11 space-y-9">
                      <h3 className="font-semibold cardTitle "> {item.title} </h3>
                      <p className="textCtgMtd  italic">{item.desc}</p>
                    </div>
                </div>
             ))
            }
        </div>       
        </div>
        {/* fin de los cards con metodos*/}


        {/* Texto con video con boton para buscar ofertas */}

          <div className="px-4 lg:px-12 max-w-screen-2xl mx-auto pt-60">
               <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-24">
                  
                  <div>
                    
                  <motion.video
                      ref={(it) => {
                          if (it) {
                              it.volume = 0.13; //  se configura el  volumen
                              videoRef.current = it;
                              videoRef.current.dataset.pausedByUser = "false"; 
                          }
                      }}
                      controls
                      controlsList="nodownload"
                      onContextMenu={(e) => e.preventDefault()}
                      className="rounded-2xl border border-green-400 shadow-2xl shadow-green-500"
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      onViewportEnter={() => {
                          if (videoRef.current?.dataset.pausedByUser === "true") return;  
                          videoRef.current?.play(); 
                      }}
                      onViewportLeave={() => {
                          if (videoRef.current && !videoRef.current.paused) {
                              videoRef.current.dataset.autoPaused = "true"; 
                              videoRef.current.pause();
                          }
                      }}
                      onPause={() => {
                          if (videoRef.current && videoRef.current.dataset.autoPaused !== "true") {
                              videoRef.current.dataset.pausedByUser = "true"; 
                          }
                          videoRef.current.dataset.autoPaused = "false"; 
                      }}
                      onPlay={() => {
                          if (videoRef.current) {
                              videoRef.current.dataset.pausedByUser = "false"; 
                          }
                      }}
                  >
                      <source src={videoPortada} type="video/mp4" />
                      Your browser does not support the video tag.
                  </motion.video>
                  
                   
                    
                  </div>   


                  <div className="md:w-3/5 mx-auto">
                       <h2 className="text-4xl text-gray-500 font-semibold mb-4 md:w-4/5 xl:w-full ">Conoce nuestras ofertas laborales mas recientes!</h2>
                       <p className="md:w-3/4 text-sm text-gray-500 mb-8 ">Dirigete al siguiente boton para encontrar lo ultimo en ofertas de RSP</p>
                       <button className="bg-green-600 text-white px-5 py-2 mx-auto">Descubre mas</button>
                  </div>
               </div>
                 

          </div>

           {/* FIN del texto con video con boton para buscar ofertas */}



        {/* ----------------Seccion de estadisticas RSP ----------------*/}

        
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-10 rounded-lg shadow-lg mt-52 md:space-x-20  md:space-y-0">
            {/* Sección Izquierda */}
            <div className="md:w-1/2 text-left mt-8 pl-7">
              <h2 className="text-3xl lg:text-2xl md:text-xl font-bold text-gray-800 uppercase">
                Líderes de reclutamiento digital en todo el país
              </h2>
              <p className="text-gray-600 mt-7 text-lg lg:text-base md:text-sm">
                Con una{' '}
                <span className="font-bold">
                  sólida trayectoria en la entrega de servicios de selección de
                  personal excepcionales,
                </span>{' '}
                hemos colaborado con muchas empresas alrededor de Colombia para
                encontrar y contratar talento de{' '}
                <span className="font-semibold">primera calidad</span>. Nuestra tasa
                de satisfacción del <span className="font-extrabold">96%</span>{' '}
                refleja nuestro compromiso con la excelencia y satisfacción de
                nuestros clientes. Para conocer más de nosotros,{' '}
                <span className="font-semibold">dirígete a :</span>
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 text-lg lg:text-base md:text-sm">
                Acerca de RSP
              </button>
            </div>

            {/* Sección Derecha */}
            <div className="md:w-1/2 grid grid-cols-2 gap-6 mb-3  pl-6 sm:mt-20  md:pl-0  min-[300px]:mt-20   min-[300px]:pl-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="text-4xl font-bold text-blue-500 md:text-3xl sm:text-3xl  min-[300px]:text-2xl">
                    <CountUp
                      end={stat.value}
                      duration={2}
                      separator="."
                      enableScrollSpy
                    />
                    {stat.showPlus && '+'}
                  </span>
                  <p className="text-gray-600 font-semibold md:text-sm sm:text-base  min-[300px]:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
    
    {/* ----------------------- seccion testimoniales ------------------*/}  
     
      <Review />


  {/* ------ Seccion de suscribirse a nuestras ofertas  del home page -------- */}

    <div className="w-full bg-gray-300/60 mt-40 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${emailsubs})` }}>
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-4xl antialiased font-semibold leading-none text-center dark:text-gray-800">Obten nuestras ofertas!</h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">Recibe emails, novedades y actualizaciones de RSP </p>
            <div className="flex flex-row">
              <input type="text" placeholder="ejemplo@gmail.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
              <button 
          type="button" 
          className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-default-600 dark:text-gray-50 
          transition-transform duration-300 transform hover:scale-105"
        >
          Suscríbete
        </button>

            </div>
          </div>
        </div>

       {/*  seccion de FAQ  */}
        
    <div className="mt-52" id="faq">
      <div className="container mx-auto flex flex-col gap-12 p-8 lg:flex-row">
         <div className="lg:w-1/3">
            <h2 className="mb-8 text-4xl font-semibold tracking-tighter">
              Preguntas más frecuentes
            </h2>
            <p className="mb-12 text-lg">{FAQ_DESCRIPTION}</p>
         </div>
         <div className="lg:w-2/3">
            {FAQS.map((faq, index) => (
               <div key={index} className="mb-4 border-b pb-4">
                  <div className="flex cursor-pointer items-center
                  justify-between p-8" onClick={() => handleToggleCT(index)}>

                   <h3 className="text-2xl">{faq.question}</h3>
                   <div>
                     {activeIndex === index ? (
                       <FaMinus className="text-xl" />
                     ) : (
                        <FaPlus className="text-xl" />
                     )}
                   </div>
                  </div>
                   <div className={`mt-4 overflow-hidden text-lg transition-all duration-500 ${
                     activeIndex === index ?  "max-h-screen" : "max-h-0"
                   }`}>
                      <p className="p-8">
                         {faq.answer}
                      </p>
                   </div>
               </div>
            ))}
         </div>
      </div>
   </div>

    {/* ----------- Seccion de contacto en la parte de abajo  -------------*/}
          
  <div className="grid max-w-screen-xl grid-cols-1 gap-8 mt-52 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-indigo-200 text-gray-800">
          <div className="flex flex-col justify-between">
          <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Escribenos!</h2>
          <div className="text-gray-600">Déjanos tus dudas o comentarios y nuestro equipo de reclutamiento te responderá en breve.</div>
          </div>
          
        <img src={contactHM} alt="" className="mt-16  h-full w-full   md:pr-24  lg:pr-40 rounded-full     md:rounded-s-full" />
        
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">Nombre</label>
            <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Correo</label>
            <input id="email" type="email" className="w-full p-3 rounded bg-gray-100" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Mensaje</label>
            <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-emerald-600 text-gray-50"> <div className="flex items-center justify-center gap-2">  Enviar Mensaje <FiSend /></div></button>
        </form>
      </div>

        
  




     </>
  );
};

export default Home