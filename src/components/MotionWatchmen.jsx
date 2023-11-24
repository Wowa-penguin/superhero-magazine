import { styles } from "../styles";
import { motion } from "framer-motion";
import { startTexst } from "../constants/index";
import { WatchmenMynd } from "../assets/index.js";

const MotionWatchmen = ({ Watchmen }) => {
  return (
    <motion.div
      className="bg-red-900"
      initial={{
        x: 1200,
        y: -225,
        height: 70,
        width: 55,
      }}
      animate={{
        x: Watchmen ? 160 : [1200, 900, 600, 300, 0, 400, 800, 1100, 1200],
        y: Watchmen ? 20 : [-225, 125, -225, 125, -225, 125, -225, 125, -225],
        height: Watchmen ? 390 : 70,
        width: Watchmen ? 1000 : 55,
      }}
      transition={{
        x: {
          duration: Watchmen ? 1 : 33,
          repeat: Watchmen ? "" : Infinity,
          repeatType: "loop",
        },
        y: {
          duration: Watchmen ? 1 : 33,
          repeat: Watchmen ? "" : Infinity,
          repeatType: "loop",
        },
        height: { duration: Watchmen ? 2 : 1 },
        width: { duration: Watchmen ? 2 : 1 },
      }}
    >
      {Watchmen ? (
        <motion.p>Hello</motion.p>
      ) : (
        <motion.img src={WatchmenMynd} alt="Unbreakable" />
      )}
    </motion.div>
  );
};

export default MotionWatchmen;