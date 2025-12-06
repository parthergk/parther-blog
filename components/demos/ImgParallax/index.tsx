"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Index = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const leftImages = [
    "/ImgParallax/img/g.jpg",
    "/ImgParallax/img/gg.jpg",
    "/ImgParallax/img/ss.jpg",
    "/ImgParallax/img/ssss.jpg",
    "/ImgParallax/img/ttt.jpg",
  ];

  const rightImages = [
    "/ImgParallax/img/ss.jpg",
    "/ImgParallax/img/dd.jpg",
    "/ImgParallax/img/ttt.jpg",
    "/ImgParallax/img/sss.jpg",
    "/ImgParallax/img/g.jpg",
  ];
  return (
    <div
      ref={container}
      className="overflow-hidden relative z-10 w-full bg-EerieBlack px-0 sm:px-3 lg:px-5 py-52 md:py-32"
    >
      <motion.div
        className="flex justify-center gap-3 md:gap-4 py-0.5 md:py-2 h-32 md:h-56"
        style={{ x: xLeft }}
      >
        {leftImages.map((src, index) => (
          <Image
            key={index}
            alt={`img-${index}`}
            src={src}
            width={380}
            height={253.36}
            className="h-3/4 w-3/4 md:w-full md:h-full"
          />
        ))}
      </motion.div>
      <motion.div
        className="flex justify-center gap-3 md:gap-4 py-0.5 md:py-2 h-32 md:h-56"
        style={{ x: xRight }}
      >
        {rightImages.map((src, index) => (
          <Image
            key={index}
            alt={`img-${index}`}
            src={src}
            width={380}
            height={253.36}
            className="h-3/4 w-3/4 md:w-full md:h-full"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Index;
