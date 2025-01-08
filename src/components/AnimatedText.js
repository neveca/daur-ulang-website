import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'

//yang di bawah ini buat animasi biar dia muncul perlahan
const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren: 0.08, //karena dah pake ini nggak perlu pake initial ma animate di singleWord
        }
    }
}
//yang ini buat animasi biar dia muncul dari bawah
const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}

const AnimatedText = ({text, className=""}) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center
        overflow-hidden 
        '>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl dark:text-light ${className}`}
            variants={quote} 
            initial="initial"
            animate="animate"
            >
            {
                text.split(" ").map((word, index) =>
                <motion.span key={word+'-'+index} className='inline-block'
                variants={singleWord}
                >
                    {word}&nbsp;
                </motion.span>
                ) 
            }
            </motion.h1>
        </div>
    )
}

export default AnimatedText