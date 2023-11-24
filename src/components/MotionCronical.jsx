import { styles } from "../styles";
import { motion } from "framer-motion";
import { ChronicleMynd } from "../assets/index.js";
import { startTexst } from "../constants/index";

const MotionCronical = ({ Chronicle }) => {
  return (
    <motion.div
      className="bg-red-900"
      initial={{
        x: 20,
        y: 0,
        height: 70,
        width: 55,
      }}
      animate={{
        x: Chronicle
          ? 160
          : [0, 200, 400, 600, 800, 1000, 1200, 1000, 800, 600, 400, 200, 0],

        y: Chronicle ? 20 : [0, 340, 0, 340, 0, 340, 0, 340, 0, 340, 0, 340, 0],
        height: Chronicle ? 390 : 70,
        width: Chronicle ? 1000 : 55,
      }}
      transition={{
        x: {
          duration: Chronicle ? 1 : 32,
          repeat: Chronicle ? "" : Infinity,
          repeatType: "loop",
        },
        y: {
          duration: Chronicle ? 1 : 37,
          repeat: Chronicle ? "" : Infinity,
          repeatType: "loop",
        },
        height: { duration: Chronicle ? 2 : 1 },
        width: { duration: Chronicle ? 2 : 1 },
      }}
    >
      {Chronicle ? (
        <motion.p>Hello</motion.p>
      ) : (
        <motion.img src={ChronicleMynd} alt="Unbreakable" />
      )}
    </motion.div>
  );
};

export default MotionCronical;
