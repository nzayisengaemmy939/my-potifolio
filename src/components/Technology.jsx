import React from 'react'
import {RiFlutterFill, RiReactjsLine} from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa";
import {DiMysql, DiJava, DiMongodb} from "react-icons/di"
import { AiOutlineHtml5} from 'react-icons/ai';
import { SiCss3, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion'
function iconVariant(duration) {
  return {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };
}

const Technology = () => {
  return (
    <div className='border border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
       className="my-20 text-center text-4xl ">Tecnologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4 ">
        <motion.div
        variants={iconVariant(2.5)}
        initial="initial"
        animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4 ">
        <RiReactjsLine className=' text-7xl text-cyan-400 '/>
        </motion.div>
        <motion.div
        variants={iconVariant(3)}
        initial="initial"
        animate="animate" 
         className=" rounded-2xl border-4 border-neutral-800 p-4 ">
          <AiOutlineHtml5 className=' text-7xl'/>
        </motion.div>
        <motion.div
        variants={iconVariant(5)}
        initial="initial"
        animate="animate" className=" rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiCss3 className=' text-7xl text-red-700'/>
        </motion.div>
        <motion.div
        variants={iconVariant(2)}
        initial="initial"
        animate="animate" className=" rounded-2xl border-4 border-neutral-800 p-4 ">
         <DiMongodb className='text-7xl text-green-500 '/>
        </motion.div>
        <motion.div
        variants={iconVariant(6)}
        initial="initial"
        animate="animate"        
        className=" rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaNodeJs className=' text-7xl text-green-500 '/>
        </motion.div>
        <motion.div
        variants={iconVariant(4)}
        initial="initial"
        animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4 ">
          <DiMysql className=' text-7xl text-cyan-700 '/>
        </motion.div>
        <motion.div
        variants={iconVariant(4)}
        initial="initial"
        animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4 ">
          <RiFlutterFill  className="text-7xl text-cyan-700  "/>
        </motion.div>
        <motion.div
        variants={iconVariant(4)}
        initial="initial"
        animate="animate"
        className=" rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiTailwindcss className="text-7xl text-cyan-700  "/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technology
