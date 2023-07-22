'use client'

import { ReactElement } from "react"
import { motion } from "framer-motion"

type ButtonProps = {
    // link: string,
    name: string,
    children: ReactElement
}


export default function HomeButton({name, children}: ButtonProps)
{
    return(
        <motion.div 
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 1.1 }} 
            className="flex flex-col justify-center items-center h-60 w-80 border-solid border-4 rounded-xl bg-btn-pink border-white space-y-1"
        >
            {children}
            <p className="text-white text-[35px]">{name}</p>
        </motion.div>
    )
}