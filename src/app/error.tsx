'use client';

import { CommonBlackLogo } from "../components/CommonBlackLogo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { errorContainer, fadeItem } from "./animations";
import { WEBSITE } from "../utils/const";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const [errorMessage, setErrorMessage] = useState({
        title: "something went wrong",
        description: "please try again later",
    });

    useEffect(() => {
        // Set appropriate error messages based on error
        if (error.message.includes("not found") || error.message.includes("404")) {
            setErrorMessage({
                title: "we couldn't find the page you're looking for",
                description: "please check the url and try again",
            });
        } else if (error.message.includes("offline") || error.message.includes("network")) {
            setErrorMessage({
                title: "network connection issue",
                description: "please check your internet connection",
            });
        } else if (error.message.includes("timeout") || error.message.includes("timed out")) {
            setErrorMessage({
                title: "request timed out",
                description: "please try again or come back later",
            });
        } else if (error.message.includes("permission") || error.message.includes("unauthorized")) {
            setErrorMessage({
                title: "you don't have permission to access this",
                description: "please check your credentials or contact support",
            });
        }

        // Log the error to console for debugging
        console.error(error);
    }, [error]);

    return (
        <motion.main 
            className="text-black flex-1 flex flex-col items-center justify-center container mx-auto max-w-lg py-16 px-6"
            initial="hidden"
            animate="show"
            variants={errorContainer}
        >
            <motion.div variants={fadeItem} className="flex items-center gap-2">
                <CommonBlackLogo />
                <h2 className='text-2xl font-mono'>{WEBSITE.NAME}</h2>
            </motion.div>
            <motion.p className="text-2xl pt-4 font-medium font-neutral-900" variants={fadeItem}>
                {errorMessage.title}
            </motion.p>
            <motion.p className="text-2xl text-neutral-400 font-medium" variants={fadeItem}>
                {errorMessage.description}
            </motion.p>
            <motion.menu className="py-5 flex gap-2" variants={fadeItem}>
                <Link href="/" className="text-2xl text-neutral-900 font-medium underline">go to home</Link>
                <button onClick={() => reset()} className="text-2xl text-neutral-900 font-medium underline">try again</button>
            </motion.menu>
        </motion.main>
    )
} 