import { aboutMoveText } from "../constants/index";
import { SuperMynd } from "../assets/index.js";
import { useState } from "react";
import { motion } from "framer-motion";

const AboutMoveSup = () => {
  const [opacity, setOpacity] = useState(false);

  setInterval(() => {
    setOpacity(true);
  }, 2300);

  return (
    <div className="border-solid border-2 h-full rounded-lg p-2 bg-black">
      <div className="flex justify-between">
        <div className="flex flex-row gap-4">
          <div className="w-[50%] h-full">
            <motion.h2
              className="text-[18px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.umMyndinaS}
            </motion.h2>
            <motion.p
              className="text-[14px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.sTexsti}
            </motion.p>
          </div>

          <div className="w-[30%] h-full text-[14px]">
            <motion.h2
              className="text-[18px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.sÖðruvísiTitil}
            </motion.h2>
            <motion.p
              className="text-[14px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.sÖðruvísi}
            </motion.p>
          </div>
          <div className="w-[20%] h-[100px]">
            <motion.img
              src={SuperMynd}
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
export default AboutMoveSup;
