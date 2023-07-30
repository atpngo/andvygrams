'use client'
import { ReactElement } from "react"
import { motion } from "framer-motion"

type EnterButtonProps = {
    children: ReactElement | ReactElement[],
    isPressed: boolean
}

export default function EnterButton({children, isPressed} : EnterButtonProps)
{
    return (
        <motion.div 
            whileHover={{scale: 1.2}} 
            whileTap={{scale: 1.1}} 
            style={{
                scale: isPressed ? 0.9 : 1.0,
                transition: "all .05s ease-in-out"
            }}
            className="flex justify-center items-center w-[150px] h-full rounded-md border-white border-8 bg-alt-pink text-white"
        >
            {children}
        </motion.div>
    )
}