import { motion } from "framer-motion";
import { UnbreakableMynd } from "../assets/index.js";
import AboutMoveUn from "./AboutMoveUn.jsx";

const MotionUnbreakable = ({ Unbreakable }) => {
  return (
    <motion.div
      initial={{
        x: 1200,
        y: 270,
        height: 70,
        width: 55,
      }}
      animate={{
        x: Unbreakable ? 160 : [1200, 900, 600, 300, 0, 400, 800, 1100, 1200],
        y: Unbreakable ? 20 : [270, -80, 270, -80, 270, -80, 270, -80, 270],
        height: Unbreakable ? 390 : 70,
        width: Unbreakable ? 1000 : 55,
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
