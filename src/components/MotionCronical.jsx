import { motion } from "framer-motion";
import { ChronicleMynd } from "../assets/index.js";
import AboutMove from "./AboutMove.jsx";

const MotionCronical = ({ Chronicle }) => {
  return (
    <motion.div
      initial={{
        x: "0%",
        y: "5%",
        height: "10vh",
        width: "5vw",
      }}
      animate={{
        x: Chronicle
          ? "10vw"
          : [
              "5vw",
              "19vw",
              "38vw",
              "57vw",
              "76vw",
              "90vw",
              "76vw",
              "57vw",
              "38vw",
              "19vw",
              "5vw",
            ],
        y: Chronicle
          ? "10vh"
          : [
              "5vh",
              "70vh",
              "5vh",
              "70vh",
              "5vh",
              "70vh",
              "5vh",
              "70vh",
              "5vh",
              "70vh",
              "5vh",
            ],
        height: Chronicle ? "65vh" : "10vh",
        width: Chronicle ? "80vw" : "5vw",
      }}
      transition={{
        x: {
          duration: Chronicle ? 1 : 33,
          repeat: Chronicle ? "" : Infinity,
          repeatType: "loop",
        },
        y: {
          duration: Chronicle ? 1 : 33,
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
