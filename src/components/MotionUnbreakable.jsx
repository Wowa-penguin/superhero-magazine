import { motion } from "framer-motion";
import { UnbreakableMynd } from "../assets/index.js";
import AboutMoveUn from "./AboutMoveUn.jsx";

const MotionUnbreakable = ({ Unbreakable }) => {
  return (
    <motion.div
      initial={{
        x: '50vw',
        y: '-4vh',
        height: '10vh',
        width: '5vw',
      }}
      animate={{
        x: Unbreakable
          ? "10vw"
          : ['90vw', '76vw', '57vw', '38vw', '19vw', '5vw', '19vw', '38vw', '57vw', '76vw', '90vw'],
        y: Unbreakable ? "10vh" : ['56vh', '-4vh', '56vh', '-4vh', '56vh', '-4vh', '56vh', '-4vh', '56vh', '-4vh', '56vh'],
        height: Unbreakable ? "65vh" : '10vh',
        width: Unbreakable ? "80vw" : '5vw',
      }}
      transition={{
        x: {
          duration: Unbreakable ? 1 : 28,
          repeat: Unbreakable ? "" : Infinity,
          repeatType: "loop",
        },
        y: {
          duration: Unbreakable ? 1 : 28,
          repeat: Unbreakable ? "" : Infinity,
          repeatType: "loop",
        },
        height: { duration: Unbreakable ? 2 : 1 },
        width: { duration: Unbreakable ? 2 : 1 },
      }}
    >
      {Unbreakable ? (
        <AboutMoveUn />
      ) : (
        <motion.img src={UnbreakableMynd} alt="Unbreakable" />
      )}
    </motion.div>
  );
};

export default MotionUnbreakable;
