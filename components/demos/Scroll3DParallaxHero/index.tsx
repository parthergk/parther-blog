import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Index = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center pt-28 sm:pt-36 md:pt-48 gap-20 ">
      <motion.div ref={scrollRef} className=" relative w-full">
        <div className=" w-full mx-auto px-5 max-w-6xl perspective-[1200px]">
          <motion.div
            style={{
              perspective: 1200,
              rotateX,
              scale,
            }}
            className="w-full rounded-xl"
          >
            <Image
              width={5120}
              height={2804}
              quality={100}
              unoptimized
              alt="demo"
              src="/Scroll3DParallaxHero/img/dashboard.webp"
              className=" rounded-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
