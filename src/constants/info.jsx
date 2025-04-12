{/*  Barra de navegacion */ }
export const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Nosotros", href: "#" },
    { label: "Contactanos", href: "#" },
  ];



{/*  Imagenes de home (body)  carrousel y el texto*/}

import carrousel1 from "../assets/profile-pictures/slide1.jpg";
import carrousel2 from "../assets/profile-pictures/slide2.jpg";
import carrousel3 from "../assets/profile-pictures/slide3.jpg";
import carrousel4 from "../assets/profile-pictures/slide4.jpg";

export const slides = [
  {
    text: "Encuentra el trabajo ideal con nosotros",
    image: carrousel1,
    highlight: "Tu talento merece la mejor oportunidad.",
  },
  {
    text: "Descubre empleos en diversas industrias y postulate fácilmente",
    image: carrousel2,
    highlight: "Accede a ofertas de trabajo en tecnología, salud, administración y más.",
  },
  {
    text: "RSP encuentra al candidato adecuado para cada desafío",
    image: carrousel3,
    highlight: "Seleccionamos a los mejores profesionales para llevar a tu empresa al siguiente nivel.",
  },

  {
    text: "¿Listo para encontrar el puesto deseado?",
    image: carrousel4,
    highlight: "Contáctanos hoy mismo y empieza a dar los primeros pasos hacia tu exito profesional",
  },
];


{/* Cards Category methods */}

import graphCtg1  from "../assets/profile-pictures/graphCtg1.jpg";
import  graphCtg2  from "../assets/profile-pictures/graphCtg2.jpg";
import  graphCtg3  from "../assets/profile-pictures/graphCtg3.png";
import graphCtg4 from "../assets/profile-pictures/graphCtg4.png";




export const categoryMethods  = [ 
  {id: 1, title: "ATS", desc: "Automatización y Selección con IA",  pic: graphCtg1 },
  {id: 2, title: "Reclutamiento Directo", desc: "Búsqueda proactiva en redes y plataformas",  pic: graphCtg2 },
  {id: 3, title: "Recomendaciones Internas", desc: "Candidatos referidos por nuestros partners",  pic: graphCtg3 },
  {id: 4, title: "Headhunting Ejecutivo", desc: "Captación de talento en el mercado global",  pic: graphCtg4 },
];



{/* Seccion INFO de FAQS HOMEPAGE   */ }

export const FAQS = [
  {
    question: "¿Qué servicios de reclutamiento y selección ofrecen?",
    answer:
      "Ofrecemos servicios de reclutamiento y selección de talento para diversas industrias. Nos encargamos de todo el proceso, desde la búsqueda de candidatos hasta la evaluación y contratación, asegurando que encuentre el mejor talento para su empresa.",
  },
  {
    question: "¿Cómo seleccionan a los candidatos?",
    answer:
      "Utilizamos un proceso de selección basado en pruebas de competencias, entrevistas estructuradas y evaluaciones psicométricas. Además, realizamos una validación exhaustiva de la experiencia y referencias de cada candidato.",
  },
  {
    question: "¿Qué tipo de perfiles pueden reclutar?",
    answer:
      "Podemos reclutar perfiles para diversas áreas, incluyendo puestos operativos, administrativos, técnicos y de alta dirección. Nos adaptamos a las necesidades específicas de cada empresa para garantizar la mejor selección.",
  },
  {
    question: "¿Cuánto tiempo tarda el proceso de selección?",
    answer:
      "El tiempo varía según la complejidad del perfil requerido, pero en general, el proceso de selección puede durar entre 1 y 4 semanas. Nos aseguramos de realizar una selección eficiente sin comprometer la calidad del talento elegido.",
  },
  {
    question: "¿Ofrecen garantía en la contratación?",
    answer:
      "Sí, ofrecemos una garantía en la contratación. Si el candidato seleccionado no cumple con las expectativas dentro de un período determinado, realizamos un reemplazo sin costo adicional.",
  },
  {
    question: "¿Pueden manejar procesos de selección masivos?",
    answer:
      "Sí, contamos con la capacidad para llevar a cabo procesos de selección masivos, garantizando rapidez y eficiencia en la contratación de múltiples candidatos para su empresa.",
  },
  {
    question: "¿Brindan servicios de consultoría en recursos humanos?",
    answer:
      "Sí, además del reclutamiento y selección, ofrecemos consultoría en recursos humanos para optimizar sus procesos de talento, mejorar el clima organizacional y desarrollar estrategias de retención de empleados.",
  },
  {
    question: "¿Cómo puedo solicitar sus servicios?",
    answer:
      "Puede contactarnos a través de nuestro sitio web, correo electrónico o teléfono. Uno de nuestros consultores se pondrá en contacto con usted para analizar sus necesidades y ofrecerle una solución personalizada.",
  },
];

export const FAQ_DESCRIPTION =
  "Explore respuestas rápidas a dudas o preguntas sobre RSP en nuestra sección de ayuda. Ya sea sobre nuestros servicios, políticas o más, encuentre la información que necesita. ¿Necesita más ayuda? ¡Comuníquese con nuestro servicio de atención al cliente para obtener asistencia personalizada!";