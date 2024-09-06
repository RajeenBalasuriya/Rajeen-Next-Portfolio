"use client";

import { AnimatePresence, delay, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavBar from "./navbar";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  
  return (
    <AnimatePresence mode="">
      <div key={pathName} className="w-screen h-screen bg-black">
        <motion.div
          className="h-screen w-screen fixed bg-dark-to-blue rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {checkPathName(pathName)}
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-dark-to-blue-up rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-24">
          <NavBar />
        </div>

        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

function checkPathName(pathName){
    if(pathName==="/"){
        return "Home";
    }
    else if(pathName==="/projectss"){
        return "Projects";
    }
    else{
        return pathName.substring(1).toUpperCase().charAt(0)+pathName.substring(2);
    }
}

export default TransitionProvider;
