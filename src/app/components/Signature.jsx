"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { RotateCcw } from "lucide-react"
import paths from "./paths.json"
export default function Signature() {
  const [key, setKey] = useState(0)

  

  const delays = [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5]

  return (
    <div className="flex flex-col items-end gap-2">
      <motion.svg
        key={key}
        width="300"
        height="150"
        viewBox="0 0 300 150"
        className="w-full max-w-xl text-stone-700 dark:text-stone-500"
      >
        <g
          stroke="currentColor"
          strokeLinecap="round"
          fill="none"
          strokeWidth="2"
        >
          {paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: delays[i] - 0.25
                },
                opacity: {
                  duration: 0,
                  delay: delays[i]
                }
              }}
            />
          ))}
        </g>
      </motion.svg>
      <motion.button
        onClick={() => setKey(k => k + 1)}
        className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
      >
        <RotateCcw size={16} />
      </motion.button>
    </div>
  )
}
