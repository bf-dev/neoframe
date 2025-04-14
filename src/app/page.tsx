'use client';

import { motion } from "framer-motion";
import { errorContainer, fadeItem } from "./animations";
import { CommonBlackLogo } from "../components/CommonBlackLogo";

export default function Home() {
  return (
    <motion.main 
      className="text-black flex-1 flex flex-col items-center justify-center container mx-auto max-w-lg py-16 px-6"
      initial="hidden"
      animate="show"
      variants={errorContainer}
    >
      <motion.div variants={fadeItem} className="flex items-center gap-2">
        <CommonBlackLogo />
        <h2 className='text-2xl font-mono'>neoworks</h2>
      </motion.div>
      <motion.p className="text-2xl pt-4 font-medium font-neutral-900" variants={fadeItem}>
        네오위키 서비스 가 종료됐어요
      </motion.p>
      <motion.p className="text-2xl text-neutral-400 font-medium" variants={fadeItem}>
        그동안 네오위키를 이용해 주셔서 감사합니다.
      </motion.p>
    </motion.main>
  );
} 