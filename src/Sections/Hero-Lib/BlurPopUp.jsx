import React from "react";
import { motion } from "framer-motion";
import { blurPopUp } from "../../Animations/animations"; // make sure this is available

export default function BlurPopUp({ children, delay = 1, className }) {
  return (
    <motion.div variants={blurPopUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut", delay }} className={className}>
      {children}
    </motion.div>
  );
}
