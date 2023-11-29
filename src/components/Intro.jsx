import { motion } from "framer-motion";
import { aboutMoveText } from "../constants/index";
import { useState } from "react";

const Intro = ({ Byrja }) => {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(true);
  const [isShown3, setIsShown3] = useState(true);

  return (
    <>
      <div className="w-full h-[80%]">
        <motion.div className="text-sm h-[45%] pt-10 flex flex-row justify-around">
          {isShown && (
            <motion.div
              className="text-lg hover:cursor-pointer"
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              onClick={() => {
                setHover(!hover);
                setIsShown1(!isShown1);
                setIsShown2(!isShown2);
                setIsShown3(!isShown3);
              }}
            >
              {hover ? (
                <>
                  <div className="flex flex-col gap-6">
                    <motion.p initial={{ opacity: 1, width: 1150, y: "10vh" }}>
                      {aboutMoveText.hvaðErPóstmódernism}
                    </motion.p>
                    <motion.p
                      initial={{ width: 70, y: "13vh" }}
                      whileHover={{ opacity: 0.5 }}
                    >
                      Til baka
                    </motion.p>
                  </div>
                </>
              ) : (
                <div className="flex ">
                  <motion.h1
                    initial={{ scale: 2 }}
                    whileHover={{ opacity: 0.5 }}
                  >
                    Hvað er póstmódernismi
                  </motion.h1>
                </div>
              )}
            </motion.div>
          )}
          {isShown1 && (
            <motion.div
              className="text-lg hover:cursor-pointer"
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              onClick={() => {
                setHover1(!hover1);
                setIsShown(!isShown);
                setIsShown2(!isShown2);
                setIsShown3(!isShown3);
              }}
            >
              {hover1 ? (
                <>
                  <div className="flex flex-col gap-6">
                    <motion.p initial={{ opacity: 1, width: 1150, y: "10vh" }}>
                      {aboutMoveText.póstmódernismiKvikmyndum}
                    </motion.p>
                    <motion.p
                      initial={{ width: 70, y: "13vh" }}
                      whileHover={{ opacity: 0.5 }}
                    >
                      Til baka
                    </motion.p>
                  </div>
                </>
              ) : (
                <motion.h1 initial={{ scale: 2 }} whileHover={{ opacity: 0.5 }}>
                  Póstmódernismi í kvikmyndum
                </motion.h1>
              )}
            </motion.div>
          )}
        </motion.div>
        <motion.div className="text-sm h-[45%] flex flex-row justify-around">
          {isShown2 && (
            <motion.div
              className="text-lg hover:cursor-pointer"
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              onClick={() => {
                setHover2(!hover2);
                setIsShown(!isShown);
                setIsShown1(!isShown1);
                setIsShown3(!isShown3);
              }}
            >
              {hover2 ? (
                <>
                  <div className="flex flex-col gap-6">
                    <motion.p initial={{ opacity: 1, width: 1150, y: "-20vh" }}>
                      {aboutMoveText.útskýraOfurhetjumyndir}
                    </motion.p>
                    <motion.p
                      initial={{ width: 70, y: "-13vh" }}
                      whileHover={{ opacity: 0.5 }}
                    >
                      Til baka
                    </motion.p>
                  </div>
                </>
              ) : (
                <motion.h1 initial={{ scale: 2 }} whileHover={{ opacity: 0.5 }}>
                  Hvað eru ofurhetjumyndir
                </motion.h1>
              )}
            </motion.div>
          )}
          {isShown3 && (
            <motion.div
              className="text-lg hover:cursor-pointer"
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              onClick={() => {
                setHover3(!hover3);
                setIsShown(!isShown);
                setIsShown1(!isShown1);
                setIsShown2(!isShown2);
              }}
            >
              {hover3 ? (
                <>
                  <div className="flex flex-col gap-6 ">
                    <motion.p initial={{ opacity: 1, width: 1150, y: "-20vh" }}>
                      {aboutMoveText.ÚtskýraPóstmódernískarOfurhetjumyndir}
                    </motion.p>
                    <motion.p
                      initial={{ width: 70, y: "-13vh" }}
                      whileHover={{ opacity: 0.5 }}
                    >
                      Til baka
                    </motion.p>
                  </div>
                </>
              ) : (
                <motion.h1 initial={{ scale: 2 }} whileHover={{ opacity: 0.5 }}>
                  Póstmódernískar ofurhetjumyndir
                </motion.h1>
              )}
            </motion.div>
          )}
        </motion.div>
        <motion.button
          className="border-2 border-solid rounded-lg pl-2 pr-2 pt-1 pb-1 bg-black	"
          onClick={Byrja}
          whileHover={{
            scale: 1.5,
            opacity: 0.7,
          }}
          whileTap={{
            scale: 0.8,
            opacity: 0.5,
          }}
        >
          Byrjar
        </motion.button>
      </div>
    </>
  );
};

export default Intro;
