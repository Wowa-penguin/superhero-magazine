import { aboutMoveText } from "../constants/index";
import { WatchmenMynd } from "../assets/index.js";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutMoveWas = () => {
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
              {aboutMoveText.umMyndinaW}
            </motion.h2>
            <motion.p
              className="text-[14px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.wTexsti}
            </motion.p>
          </div>

          <div className="w-[40%] h-full text-[14px]">
            <motion.h2
              className="text-[18px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.wÖðruvísiTitil}
            </motion.h2>
            <motion.p
              className="text-[14px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity ? 1 : 0 }}
            >
              {aboutMoveText.wÖðruvísi}
            </motion.p>
          </div>
          <div className="w-[20%] h-[100px]">
            <motion.img
              src={WatchmenMynd}
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
export default AboutMoveWas;
