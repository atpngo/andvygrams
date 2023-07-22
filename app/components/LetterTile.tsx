'use client'

import { motion } from "framer-motion"
type LetterTileProps = {
    letter: string
}

export default function LetterTile({letter} : LetterTileProps)
{
    return (
        <motion.div 
        whileHover={{scale: 1.2}}
        whileTap={{scale: 1.1}} className="flex justify-center items-center text-white bg-alt-pink border-4 rounded-sm w-14 h-14 text-[40px]">
            {letter}
        </motion.div>
    )
}