import { aboutMoveText } from "../constants/index";
import { ChronicleMynd } from "../assets/index.js";
import { useState } from "react";
import { motion } from "framer-motion";

const AboutMove = () => {
  const [opacity, setOpacity] = useState(false);

  setInterval(() => {
    setOpacity(true);
  }, 2300);

  return (
    <div className="border-solid border-2 h-full rounded-lg p-2 bg-black">
      <div className="flex justify-between">
        <div className="flex flex-row gap-4">
          <div className="w-[40%] h-full">
            <motion.h2
              className="text-[18px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.umMyndinaC}
            </motion.h2>
            <motion.p
              className="text-[14px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.cTexsti}
            </motion.p>
          </div>

          <div className="w-[40%] h-full text-[14px]">
            <motion.h2
              className="text-[18px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.cÖðruvísiTitil}
            </motion.h2>
            <motion.p
              className="text-[14px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.cÖðruvísi}
            </motion.p>
          </div>
          <div className="w-[20%] h-[100px]">
            <motion.img
              src={ChronicleMynd}
              alt="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMove;
