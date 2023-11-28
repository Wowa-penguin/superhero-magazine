import { motion } from "framer-motion";
import { WatchmenMynd } from "../assets/index.js";
import AboutMoveWas from "./AboutMoveWas.jsx";

const MotionWatchmen = ({ Watchmen }) => {
  return (
    <motion.div
      initial={{
        x: '0vw',
        y: '48vh',
        height: '10vh',
        width: '5vw',
      }}
      animate={{
        x: Watchmen ? "10vw" : ['90vw', '76vw', '57vw', '38vw', '19vw', '5vw', '19vw', '38vw', '57vw', '76vw', '90vw'],
        y: Watchmen
          ? "10vh"
          : ['-15vh', '48vh', '-15vh', '48vh', '-15vh', '48vh', '-15vh', '48vh', '-15vh', '48vh', '-15vh'],
        height: Watchmen ? "65vh" : '10vh',
        width: Watchmen ? "80vw" : '5vw',
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
        <AboutMoveWas />
      ) : (
        <motion.img src={WatchmenMynd} alt="Unbreakable" />
      )}
    </motion.div>
  );
};

export default MotionWatchmen;
