import { motion } from "framer-motion";
import { SuperMynd } from "../assets/index.js";
import AboutMoveSup from "./AboutMoveSup.jsx";

const MotionSuper = ({ Super }) => {
  return (
    <motion.div
      className="absolute"
      initial={{
        x: '0vw',
        y: '-55vh',
        height: '10vh',
        width: '5vw',
      }}
      animate={{
        x: Super
          ? "10vw" : ['5vw', '19vw', '38vw', '57vw', '76vw', '90vw', '76vw', '57vw', '38vw', '19vw', '5vw'],
        y: Super
          ? "10vh" : ['50vh', '-13vh', '50vh', '-13vh', '50vh', '-13vh', '50vh', '-13vh', '50vh', '-13vh', '50vh'],
        height: Super ? "65vh" : '10vh',
        width: Super ? "80vw" : '5vw',
      }}
      transition={{
        x: {
          duration: Super ? 1 : 30,
          repeat: Super ? "" : Infinity,
          repeatType: "loop",
        },
        y: {
          duration: Super ? 1 : 30,
          repeat: Super ? "" : Infinity,
          repeatType: "loop",
        },
        height: { duration: Super ? 2 : 1 },
        width: { duration: Super ? 2 : 1 },
      }}
    >
      {Super ? <AboutMoveSup /> : <motion.img src={SuperMynd} alt="Super" />}
    </motion.div>
  );
};

export default MotionSuper;
