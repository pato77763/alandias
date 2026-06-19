import { motion } from "motion/react";
export function BannerImage() {
  const imgHorizontal = "/images/banner_horizontal.png";
  return (
    <section className="bg-[#111] overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <img
          src={imgHorizontal}
          alt="Imagem de Destaque Horizontal"
          className="w-full h-auto object-cover block"
        />
      </motion.div>
    </section>
  );
}
