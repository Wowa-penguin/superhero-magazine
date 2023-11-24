import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Navbar = ({ onClick1, onClick2, onClick3, onClick4 }) => {
  return (
    <>
      <div className="flex flex-col content-between w-full y-20">
        <div className="flex justify-between bg-[#3b3b3b] pl-5 pr-5 pb-2 pt-2 ">
          <h2 className="text-[33px]">KFRT3OT05</h2>
          <h2 className="text-[33px]">Póstmodernískar Ofurhetjukvikmyndir</h2>
          <h2 className="text-[33px]">FMOS</h2>
        </div>
        <div className="flex justify-between pl-5 pr-5 pb-2 pt-1 bg-[#595858]">
          <motion.button
            onClick={onClick1}
            className={`${styles.navText}`}
            whileHover={{
              scale: 1.5,
              opacity: 0.7,
            }}
            whileTap={{
              scale: 0.9,
              opacity: 0.5,
            }}
          >
            Chronicle
          </motion.button>
          <motion.button
            onClick={onClick2}
            className={`${styles.navText}`}
            whileHover={{
              scale: 1.5,
              opacity: 0.7,
            }}
            whileTap={{
              scale: 0.9,
              opacity: 0.5,
            }}
          >
            Unbreakable
          </motion.button>
          <motion.button
            onClick={onClick3}
            className={`${styles.navText}`}
            whileHover={{
              scale: 1.5,
              opacity: 0.7,
            }}
            whileTap={{
              scale: 0.9,
              opacity: 0.5,
            }}
          >
            Super
          </motion.button>
          <motion.button
            onClick={onClick4}
            className={`${styles.navText}`}
            whileHover={{
              scale: 1.4,
              opacity: 0.7,
            }}
            whileTap={{
              scale: 0.9,
              opacity: 0.5,
            }}
          >
            Watchmen
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
