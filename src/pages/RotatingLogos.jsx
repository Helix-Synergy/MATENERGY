import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.png";
import img2 from "../assets/tracks/img2.webp"
import img3  from "../assets/tracks/img3.jpg";
import img4 from "../assets/tracks/img4.jpg";
import img5 from "../assets/tracks/img5.jpg";
import img6 from "../assets/tracks/img6.webp"
import img7 from "../assets/tracks/img7.jpg";
import img8 from "../assets/tracks/img8.avif"
import img9 from "../assets/tracks/img9.jpeg";
import img10 from "../assets/tracks/img10.jpg"
import img11 from "../assets/tracks/img11.jpeg";
import img12 from "../assets/tracks/img12.jpg"
import img13 from "../assets/tracks/img13.webp";
import img14 from "../assets/tracks/img14.jpg"
import img15 from "../assets/tracks/img15.png";
import img16 from "../assets/tracks/img16.webp"
import img17 from "../assets/tracks/img17.jpeg"
import img18 from "../assets/tracks/img18.webp";
import img19 from "../assets/tracks/img19.jpg"
import img20 from "../assets/tracks/img20.jpg"

export const tracks = [
  {
    image: img1,
    title: "Semi & Super Conductors",
    description: (
      <>
This track explores the development, fabrication, and applications of  {" "}
        <Link
          to="/"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      semiconductors and superconductors
        </Link> in electronics, energy, and advanced devices. Participants will understand conductivity optimization, energy efficiency, and integration into next-generation quantum devices, high-performance electronics, and industrial applications. Innovations drive faster, more efficient, and sustainable technological solutions across multiple sectors globally.
      </>
    ),
  },

  {
    image: img2,
    title: "Nanomaterials Science",
    description: (
      <>
{" "}
        <Link
          to="/about-matenergy"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Nano materials science 
        </Link>{" "} focuses on synthesis, characterization, and applications of nanoscale materials for energy, electronics, healthcare, and industrial sectors. Participants examine unique properties, performance optimization, scalability, and integration strategies. Innovations in nanostructures improve mechanical, electrical, and thermal characteristics, enabling breakthroughs in energy storage, sensors, composites, and next-generation industrial manufacturing technologies.
      </>
    ),
  },

  {
    image: img3,
    title: " Electric Vehicles",
    description: (
      <>
This track emphasizes materials, energy solutions, and technologies supporting{" "}
        <Link
          to="/matenergy-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
electric vehicle development.
        </Link> Focus areas include battery design, lightweight structures, power electronics, and energy efficiency. Participants explore sustainable transportation, performance optimization, and integration of advanced materials and nanotechnology. These innovations accelerate adoption of clean mobility solutions, enhance vehicle efficiency, and reduce environmental impact.
      </>
    ),
  },

  {
    image: img4,
    title: "Aerospace and Automotive",
    description: (
      <>
 This track examines advanced materials and manufacturing innovations for  {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
aerospace and automotive 
        </Link>{" "} sectors. Focus includes composites, alloys, lightweight structures, and high-performance materials. Participants learn strategies to enhance efficiency, durability, fuel savings, and sustainability. Innovations in materials science improve vehicle performance, reduce energy consumption, and enable next-generation designs for air, land, and space applications.

      </>
    ),
  },

  {
    image: img5 ,
    title: "Biomaterials & Medical Devices",
    description: (
      <>
The track covers advanced{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   biomaterials for medical 
        </Link>{" "} applications, including implants, drug delivery systems, sensors, and devices. Focus is on biocompatibility, material design, fabrication techniques, and regulatory compliance. Participants learn how materials innovations support improved healthcare outcomes, enhanced device functionality, and sustainable solutions in medical technology, biomedical research, and clinical applications worldwide.
   
      </>
    ),
  },

  {
    image: img6,
    title: "Ceramics & Composite Materials",
    description: (
      <>

       This track explores the design, processing, and applications of advanced <Link
          to="/zerotrustai-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
ceramics and composite materials
        </Link>{" "} for energy, aerospace, and industrial applications. Participants study material strength, thermal resistance, and multifunctionality. Innovations improve durability, performance, and sustainability in manufacturing. Applications include lightweight structures, protective coatings, high-temperature components, and advanced industrial systems.
     
      </>
    ),
  },

  {
    image: img7,
    title: "Polymers",
    description: (
      <>
This track focuses on advanced {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    polymers and plastics
        </Link>{" "}  for industrial, biomedical, and technological applications. Participants explore synthesis, processing, functionalization, and properties enhancement for thermal, chemical, and mechanical performance. Polymers enable lightweight, durable, and sustainable solutions for energy, electronics, and manufacturing industries, supporting next-generation materials innovation and environmentally friendly industrial practices globally.
      </>
    ),
  },

  {
    image:  img8,
    title: "Nanotechnology",
    description: (
      <>
    {" "}
        <Link
          to="/zerotrustai-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Nanotechnology
        </Link>{" "} covers nanoscale materials, fabrication techniques, and applications across energy, electronics, healthcare, and manufacturing. Participants learn strategies to integrate nanostructures for enhanced performance, efficiency, and sustainability. Innovations in nanotechnology drive breakthroughs in energy storage, sensors, smart devices, and industrial systems, enabling scalable and cost-effective solutions for next-generation technologies worldwide.
      
      </>
    ),
  },

  {
    image: img9,
    title: "Graphene & 2D Materials",
    description: (
      <>
This track explores graphene and other two-dimensional materials for electronics, energy, and composite applications. Participants study synthesis, characterization, and integration techniques. Graphene’s exceptional conductivity, strength, and flexibility enable innovation in sensors, electronics, energy devices, and advanced composites. Applications include high-performance manufacturing, energy-efficient {" "}
        <Link
          to="/about-matenergy"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
technologies, and multifunctional industrial solutions. 
        </Link>{" "}

      </>
    ),
  },

  {
    image: img10,
    title: "Optical & Electronic Materials",
    description: (
      <>
Focusing on materials for optoelectronics, photonics, and advanced electronics, this track covers design, fabrication, and applications. Participants explore LEDs, sensors, semiconductors, and photonic devices. Innovations improve communication systems, industrial electronics, and energy efficiency. Advanced optical and electronic materials drive next-generation industrial solutions, enhance performance, and support sustainable and intelligent technology development.{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >

        </Link>{" "}

      </>
    ),
  },

  {
    image: img11,
    title: "Computational Materials",
    description: (
      <>
  {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Computational materials science
        </Link>  focuses on modeling, simulation, and predictive design of materials for energy, electronics, and manufacturing. Participants learn to optimize properties, predict performance, and accelerate development cycles using machine learning, AI, and computational tools. Applications include material innovation, device optimization, and scalable industrial solutions, advancing efficiency and sustainability across multiple sectors.
      </>

    ),
  },

  {
    image: img12,
    title:  "Solar Energy",
    description: (
      <>
This track covers materials, devices, and technologies for efficient solar energy harvesting. Participants explore photovoltaic materials, thin films, perovskites, and energy conversion optimization. Focus includes performance, scalability, and sustainable deployment strategies. Innovations support global renewable energy adoption, energy efficiency, and integration into industrial, commercial, and residential systems for a low-carbon future.. {" "}
        <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   
        </Link>{" "}    
      
      </>
    ),
  },

  {
    image: img13,
    title: "Renewable Energy",
    description: (
      <>
This track emphasizes materials and technologies for renewable energy systems, including solar, wind, bioenergy, {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    hydro, and geothermal
        </Link> applications. Participants learn about energy efficiency, storage solutions, and sustainable integration strategies. Innovations drive the transition to low-carbon energy, scalable industrial applications, and environmentally responsible energy systems that meet growing global energy demands.

        
      </>
    ),
  },

  {
    image:img14,
    title: "Environmental Impact",
    description: (
      <>
This track examines sustainable material development, life-cycle assessment, and {" "}
        <Link
          to="/about-matenergy"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   environmental impact 
        </Link>  mitigation. Participants explore strategies to minimize carbon footprint, waste, and resource consumption. Innovations in eco-friendly design, recycling, and green industrial practices support sustainable manufacturing, clean energy deployment, and responsible use of advanced materials, ensuring environmental safety and global sustainability.
        
      </>
    ),
  },

  {
    image: img15,
    title: "Metals & Alloys Structure",
    description: (
      <>
      Metals & Alloys Structure{" "}
        <Link
          to="/zerotrustai-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   microstructure,
        </Link> composition, processing, and mechanical properties. Participants explore applications in aerospace, energy, and manufacturing industries. Advanced alloys improve strength, durability, and thermal performance. Innovations enable lightweight structures, corrosion resistance, and energy-efficient industrial systems, supporting sustainable materials development and high-performance solutions for global applications.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Photovoltaic Technology",
    description: (
      <>
This track covers advanced materials and devices for solar energy conversion. Participants study thin films, perovskites, coatings, and cell architecture. Emphasis is on efficiency, scalability, and industrial integration. Innovations enhance photovoltaic performance, durability, and cost-effectiveness, supporting global renewable energy deployment and sustainable energy solutions across industrial, commercial, and residential sectors.{" "}
        <Link
          to= "/zerotrustai-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        
        </Link> 
</>
    ),
  },

  {
    image:img17,
    title: "Fuel Cell Technology",
    description: (
      <>
Focusing on materials and engineering for fuel cells, this track examines catalysts, membranes, electrodes, and system design. Participants learn strategies for efficient energy conversion, performance optimization, and industrial integration. {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      Fuel cell innovations
        </Link>  enable sustainable, clean power generation, supporting transportation, energy systems, and next-generation industrial applications worldwide.
  
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Waste Recycling",
    description: (
      <>
   This track explores innovative technologies for recycling materials, industrial by products, and energy waste. Participants study recovery methods, sustainable processing, and circular economy strategies. Advanced recycling innovations transform waste into reusable resources, reduce environmental impact, and support industrial sustainability. Applications include metals, polymers, electronics, and energy systems, promoting global resource efficiency.{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      
        </Link> 

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: "Bioenergy and Biofuels",
    description: (
      <>
  This track focuses on materials and technologies for{" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 bioenergy and biofuel 
        </Link> production. Participants explore feedstocks, conversion techniques, energy optimization, and sustainability strategies. Innovations support reduced carbon emissions, renewable energy deployment, and efficient industrial bioenergy systems. Applications include biomass, algae, and waste-to-energy solutions, advancing global clean energy adoption.
      </>
    ),
  },
  {
    image:img20,
    title: "Wind Energy",
    description: (
      <>
    This track examines materials, composites, and structural innovations for wind turbine systems. Participants explore performance optimization, durability, lightweight designs, and sustainable materials. Innovations enhance efficiency, reliability, and industrial scalability of  {" "}
        <Link
          to="/about-matenergy" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
wind energy systems. 
        </Link>{" "}  Focus is on reducing energy costs and environmental impact while maximizing renewable energy output for global applications.
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
