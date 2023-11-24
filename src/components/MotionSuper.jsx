import { styles } from "../styles";
import { motion } from "framer-motion";
import { startTexst } from "../constants/index";
import { SuperMynd } from "../assets/index.js";

const MotionSuper = ({ Super }) => {
  return (
    <motion.div
      className="bg-red-900"
      initial={{
        x: 0,
        y: 200,
        height: 70,
        width: 55,
      }}
      animate={{
        x: Super
          ? 160
          : [0, 200, 400, 600, 800, 1000, 1200, 1000, 800, 600, 400, 200, 0],

        y: Super
          ? 20
          : [
              200, -160, 200, -160, 200, -160, 200, -160, 200, -160, 200, -160,
              200,
            ],
        height: Super ? 390 : 70,
        width: Super ? 1000 : 55,
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
      {Super ? (
        <motion.p>Hello</motion.p>
      ) : (
        <motion.img src={SuperMynd} alt="Super" />
      )}
    </motion.div>
  );
};

export default MotionSuper;
