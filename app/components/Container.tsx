'use client'
import { ReactElement } from "react"
import { motion } from "framer-motion"

type ContainerProps = {
    children: ReactElement | ReactElement[],
    variant: string
}

export default function Container({children, variant} : ContainerProps)
{
    if (variant === "sm")
    {
        return (
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 1.1}} className="flex justify-center items-center w-[150px] h-full rounded-md border-white border-8 bg-alt-pink text-white">
                {children}
            </motion.div>
        )
    }
    return (
        <div className="flex justify-center items-center w-[320px] h-full rounded-xl border-white border-8 bg-alt-pink text-white">
            {children}
        </div>
    )
}