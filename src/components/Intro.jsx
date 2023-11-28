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
      <motion.div className="text-sm flex">
        {isShown && (
          <motion.div
            className="text-lg hover:cursor-pointer"
            initial={{
              height: 50,
              width: 260,
            }}
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
                <motion.p initial={{ opacity: 1, width: 1150, x: 50, y: 10 }}>
                  {aboutMoveText.hvaðErPóstmódernism}
                </motion.p>
                <motion.p
                  initial={{ x: 50, y: 75, width: 70 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  Til baka
                </motion.p>
              </>
            ) : (
              <motion.h1
                initial={{ scale: 2, x: 160, y: 25 }}
                whileHover={{ opacity: 0.5 }}
              >
                Hvað er póstmódernismi
              </motion.h1>
            )}
          </motion.div>
        )}
        {isShown1 && (
          <motion.div
            className="text-lg hover:cursor-pointer"
            initial={{
              height: 50,
              width: 260,
            }}
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
                <motion.p initial={{ opacity: 1, width: 1150, x: 50, y: 10 }}>
                  {aboutMoveText.póstmódernismiKvikmyndum}
                </motion.p>
                <motion.p
                  initial={{ x: 50, y: 75, width: 70 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  Til baka
                </motion.p>
              </>
            ) : (
              <motion.h1
                initial={{ scale: 2, x: 600, y: 25 }}
                whileHover={{ opacity: 0.5 }}
              >
                Póstmódernismi í kvikmyndum
              </motion.h1>
            )}
          </motion.div>
        )}
      </motion.div>
      <motion.div className="text-sm flex">
        {isShown2 && (
          <motion.div
            className="text-lg hover:cursor-pointer"
            initial={{
              height: 50,
              width: 260,
            }}
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
                <motion.p initial={{ opacity: 1, width: 1150, x: 50, y: 10 }}>
                  {aboutMoveText.útskýraOfurhetjumyndir}
                </motion.p>
                <motion.p
                  initial={{ x: 50, y: 75, width: 70 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  Til baka
                </motion.p>
              </>
            ) : (
              <motion.h1
                initial={{ scale: 2, x: 160, y: 200 }}
                whileHover={{ opacity: 0.5 }}
              >
                Hvað eru ofurhetjumyndir
              </motion.h1>
            )}
          </motion.div>
        )}
        {isShown3 && (
          <motion.div
            className="text-lg hover:cursor-pointer"
            initial={{
              height: 50,
              width: 300,
            }}
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
                <motion.p initial={{ opacity: 1, width: 1150, x: 50, y: 10 }}>
                  {aboutMoveText.ÚtskýraPóstmódernískarOfurhetjumyndir}
                </motion.p>
                <motion.p
                  initial={{ x: 50, y: 75, width: 70 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  Til baka
                </motion.p>
              </>
            ) : (
              <motion.h1
                initial={{ scale: 2, x: 570, y: 200 }}
                whileHover={{ opacity: 0.5 }}
              >
                Póstmódernískar ofurhetjumyndir
              </motion.h1>
            )}
          </motion.div>
        )}
      </motion.div>
      <motion.button
        className="border-2 border-solid rounded-lg pl-2 pr-2 pt-1 pb-1 shadow-2xl bg-black	"
        onClick={Byrja}
        initial={{ x: 40, y: 250 }}
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
    </>
  );
};

export default Intro;
