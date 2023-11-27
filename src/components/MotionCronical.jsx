import { motion } from "framer-motion";
import { ChronicleMynd } from "../assets/index.js";
import AboutMove from "./AboutMove.jsx";

const MotionCronical = ({ Chronicle }) => {
  return (
    <motion.div
      initial={{
        x: 20,
        y: 0,
        height: 70,
        width: 55,
      }}
      animate={{
        x: Chronicle ? 160 : [0, 400, 800, 1200, 800, 400, 0],

        y: Chronicle ? 20 : [0, 340, 0, 340, 0, 340, 0],
        height: Chronicle ? 390 : 70,
        width: Chronicle ? 1000 : 55,
      }}
      transition={{
        x: {
          duration: Chronicle ? 1 : 38,
          repeat: Chronicle ? "" : Infinity,
          repeatType: "loop",
        },
        y: {
          duration: Chronicle ? 1 : 38,
          repeat: Chronicle ? "" : Infinity,
          repeatType: "loop",
        },
        height: { duration: Chronicle ? 2 : 1 },
        width: { duration: Chronicle ? 2 : 1 },
      }}
    >
      {Chronicle ? (
        <AboutMove />
      ) : (
        <motion.img src={ChronicleMynd} alt="Unbreakable" />
      )}
    </motion.div>
  );
};

export default MotionCronical;
