import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { FaStar} from 'react-icons/fa';
 

 {/*  Imagenes de los testimoniales de la seccion del home */}
import camiloPic from '../assets/profile-pictures/testimonio1.png'
 import stevenPic from '../assets/profile-pictures/testimonio2.png'
 import melisaPic from '../assets/profile-pictures/testimonio3.png'
 import sandraPic from '../assets/profile-pictures/testimonio4.png'

 
 const Review = () => {

    const { innerWidth: Width } = window; 
     const ref = useRef();
      
     const isInView = useInView(ref);
     const mainControlls = useAnimation();
     useEffect(() => {
       if (isInView) {
         mainControlls.start("visible");
       }
     }, [isInView]);


     return( 
     <div className="overflow-x-hidden max-w-screen-2xl mt-20">
       <div className="text-black">
      
      {Width < 631 ? (
        <>
          <div className="container px-6 py-12 mx-auto">
    <div className="grid items-center gap-4 xl:grid-cols-5">
        <div className="max-w-2xl mx-auto rounded shadow-md bg-blue-100/20 p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold text-black">Lo que opinan de nosotros</h2>
            <p className="dark:text-gray-600">Aqui hay algunos testimonios de los clientes que nos conocen</p>
        </div>
        <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md bg-blue-200/30 ">
                            <img src={camiloPic} alt="" className="w-20 h-20  mx-auto object-cover   rounded-full dark:bg-gray-500" />
            <div className="flex justify-center mt-4">
             {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-lg" />
           ))}
           </div>

           <div className="flex justify-center mt-4 ">
                            <div>
                                <p className="text-lg font-semibold">Camilo Correa</p>
                                <p className="text-sm text-gray-600">Usuario de Facebook</p>
                            </div>
            </div>


                        <p className="mt-4 text-center"> Esta página es excelente para buscar empleo, ya que constantemente publican muchas vacantes en diversas áreas. Su plataforma es fácil de usar, lo que facilita la búsqueda y postulación a los trabajos. Sin duda, una gran herramienta para quienes están en busca de nuevas oportunidades laborales.</p>
                        
                    </div>
                    <div className="p-6 rounded shadow-md bg-blue-200/60">
        <img src={melisaPic} alt="" className="w-20 h-20   mx-auto object-cover   rounded-full dark:bg-gray-500" />
            <div className="flex justify-center mt-4">
             {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-lg" />
           ))}
           </div>

           <div className="flex justify-center mt-4 ">
                            <div>
                                <p className="text-lg font-semibold">Melisa Lopera</p>
                                <p className="text-sm text-gray-600">Usuaria de Google</p>
                            </div>
            </div>


                        <p className="mt-4 text-center"> Me sorprendió la cantidad de vacantes que publican cada día.  La recomiendo a cualquiera que esté buscando nuevas oportunidades laborales.</p>
                    </div>
                </div>
                <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md bg-blue-200/60">
        <img src={sandraPic} alt="" className="w-20 h-20   mx-auto object-cover   rounded-full dark:bg-gray-500" />
            <div className="flex justify-center mt-4">
             {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-lg" />
           ))}
           </div>

           <div className="flex justify-center mt-4 ">
                            <div>
                                <p className="text-lg font-semibold">Sandra Zapata</p>
                                <p className="text-sm text-gray-600">Usuario de Google</p>
                            </div>
            </div>


                        <p className="mt-4 text-center"> Encontrar empleo puede ser complicado, pero con esta plataforma ha sido mucho más fácil y rápido. Me ha permitido acceder a ofertas de calidad y conectar con empresas serias. ¡Estoy muy satisfecho con mi experiencia! </p>
                    </div>
                    <div className="p-6 rounded shadow-md bg-blue-200/30">
        <img src={stevenPic} alt="" className="w-20 h-20   mx-auto object-cover   rounded-full dark:bg-gray-500" />
            <div className="flex justify-center mt-4">
             {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-lg" />
           ))}
           </div>

           <div className="flex justify-center mt-4 ">
                            <div>
                                <p className="text-lg font-semibold">Steven Ospina </p>
                                <p className="text-sm text-gray-600">Usuario de Facebook</p>
                            </div>
            </div>


                        <p className="mt-4 text-center">  Lo que más me gusta de esta plataforma es que las vacantes son actualizadas constantemente y están bien detalladas. No pierdo tiempo con ofertas desactualizadas o poco claras. Ha sido una gran herramienta para mi crecimiento profesional.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

        </>
      ) : (
        <>
         <div className="container px-6 py-12 mx-auto">
    <div className="grid items-center gap-4 xl:grid-cols-5">
        <motion.div 
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{ duration: 0.5, delay: 0.25 }}

        className="max-w-2xl mx-auto rounded shadow-md bg-blue-100/20 p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left"
        >
            <h2 className="text-4xl font-bold text-black">Lo que opinan de nosotros</h2>
            <p className="dark:text-gray-600">Aqui hay algunos testimonios de los clientes que nos conocen</p>
        </motion.div>
        <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                    <motion.div 
                     ref={ref}
                     variants={{
                       hidden: { opacity: 0, x: -75, y: -45 },
                       visible: { opacity: 1, x: 0, y: 0 },
                     }}
                     initial="hidden"
                     animate={mainControlls}
                     transition={{ duration: 0.6, delay: 0.15 }}
                    
                    className="p-6 rounded shadow-md bg-blue-200/30 ">

                 <img src={camiloPic} alt="" className="w-20 h-20  mx-auto object-cover   rounded-full dark:bg-gray-500" />
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-lg" />
                 ))}
                     </div>

           <div className="flex justify-center mt-4 ">
                            <div>
                                <p className="text-lg font-semibold">Camilo Correa</p>
                                <p className="text-sm text-gray-600">Usuario de Facebook</p>
                            </div>
            </div>


                        <p className="mt-4 text-center"> Esta página es excelente para buscar empleo, ya que constantemente publican muchas vacantes en diversas áreas. Su plataforma es fácil de usar, lo que facilita la búsqueda y postulación a los trabajos. Sin duda, una gran herramienta para quienes están en busca de nuevas oportunidades laborales.</p>
                        
                    </motion.div>


                    <motion.div 
                       ref={ref}
                       variants={{
                         hidden: { opacity: 0, x: -75, y: 45 },
                         visible: { opacity: 1, x: 0, y: 0 },
                       }}
                       initial="hidden"
                       animate={mainControlls}
                       transition={{ duration: 0.6, delay: 0.35 }}
                    className="p-6 rounded shadow-md bg-blue-200/60">
        <img src={melisaPic} alt="" className="w-20 h-20   mx-auto object-cover   rounded-full dark:bg-gray-500" />
            <div className="flex justify-center mt-4">
             {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-lg" />
           ))}
           </div>

           <div className="flex justify-center mt-4 ">
                            <div>
                                <p className="text-lg font-semibold">Melisa Lopera</p>
                                <p className="text-sm text-gray-600">Usuaria de Google</p>
                            </div>
            </div>


                        <p className="mt-4 text-center"> Me sorprendió la cantidad de vacantes que publican cada día.  La recomiendo a cualquiera que esté buscando nuevas oportunidades laborales.</p>
                    </motion.div>
                </div>
                <div className="grid content-center gap-4">
                    <motion.div 
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: 75, y: -45 },
                        visible: { opacity: 1, x: 0, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.7, delay: 0.55 }}
                    className="p-6 rounded shadow-md bg-blue-200/60">
        <img src={sandraPic} alt="" className="w-20 h-20   mx-auto object-cover   rounded-full dark:bg-gray-500" />
            <div className="flex justify-center mt-4">
             {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-lg" />
           ))}
           </div>

           <div className="flex justify-center mt-4 ">
                            <div>
                                <p className="text-lg font-semibold">Sandra Zapata</p>
                                <p className="text-sm text-gray-600">Usuario de Google</p>
                            </div>
            </div>


                        <p className="mt-4 text-center"> Encontrar empleo puede ser complicado, pero con esta plataforma ha sido mucho más fácil y rápido. Me ha permitido acceder a ofertas de calidad y conectar con empresas serias. ¡Estoy muy satisfecho con mi experiencia! </p>
                    </motion.div>

                    <motion.div 
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: 75, y: 45 },
                        visible: { opacity: 1, x: 0, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.8, delay: 0.75 }}

                    className="p-6 rounded shadow-md bg-blue-200/30">
        <img src={stevenPic} alt="" className="w-20 h-20   mx-auto object-cover   rounded-full dark:bg-gray-500" />
            <div className="flex justify-center mt-4">
             {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-lg" />
           ))}
           </div>

           <div className="flex justify-center mt-4 ">
                            <div>
                                <p className="text-lg font-semibold">Steven Ospina </p>
                                <p className="text-sm text-gray-600">Usuario de Facebook</p>
                            </div>
            </div>


                        <p className="mt-4 text-center">  Lo que más me gusta de esta plataforma es que las vacantes son actualizadas constantemente y están bien detalladas. No pierdo tiempo con ofertas desactualizadas o poco claras. Ha sido una gran herramienta para mi crecimiento profesional.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
        </div>



        </>
       )}











</div>
</div>
  );
 };

 






export default Review;