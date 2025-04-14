'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { errorContainer, fadeItem } from "./animations";
import { CommonBlackLogo } from "../components/CommonBlackLogo";

export default function NotFound() {
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
        we couldn&apos;t find the page you&apos;re looking for
      </motion.p>
      <motion.p className="text-2xl text-neutral-400 font-medium" variants={fadeItem}>
        please check the url and try again
      </motion.p>
      <motion.menu className="py-5 flex gap-2" variants={fadeItem}>
        <Link href="/" className="text-2xl text-neutral-900 font-medium underline">go to home</Link>
      </motion.menu>
    </motion.main>
  )
} 