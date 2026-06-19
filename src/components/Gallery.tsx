import { motion } from "motion/react";
import { Frame } from "./Frame";

export function Gallery() {
  const images = [
    "/images/galeria_1.png",
    "/images/galeria_2.jpg",
    "/images/galeria_3.jpg",
    "/images/galeria_4.jpg",
    "/images/galeria_5.jpg",
    "/images/galeria_6.jpg",
    "/images/galeria_7.jpg",
    "/images/galeria_8.jpg",
    "/images/galeria_9.png",
    "/images/galeria_10.jpg",
    "/images/galeria_11.png",
    "/images/galeria_12.png",
    "/images/galeria_13.png",
    "/images/galeria_14.png",
    "/images/galeria_15.png",
    "/images/galeria_16.png"
  ];

  return (
    <section id="filmes-momentos" className="bg-[#111] py-16 px-6 lg:py-24 lg:px-24 border-t border-stone-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Title Area */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full text-center mb-16"
        >
          <Frame theme="light" className="inline-block py-6 px-12 bg-black/40 backdrop-blur-sm">
             <span className="text-xs uppercase tracking-[0.25em] text-[#b59b73] font-bold block mb-2">Histórias em Imagens</span>
             <h2 className="font-display font-bold text-3.5xl md:text-5xl uppercase tracking-tighter text-white">
               Galeria de Momentos
             </h2>
             <div className="h-px bg-stone-700 w-12 mt-4 mx-auto" />
          </Frame>
        </motion.div>

        {/* Photo Gallery Column Masonry */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 w-full">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="break-inside-avoid relative overflow-hidden rounded-lg group cursor-pointer border border-stone-900/40"
            >
              <img
                src={img}
                alt={`Galeria de Momentos Allan Dias ${index + 1}`}
                className="w-full h-auto rounded-lg object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle elegant hover overlay */}
              <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
