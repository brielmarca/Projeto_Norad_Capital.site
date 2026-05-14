import { motion, useScroll, useTransform } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const

export default function HeroLineBackground() {
  const { scrollYProgress } = useScroll()
  const yGold = useTransform(scrollYProgress, [0, 0.2], [0, 50])
  const yNavy = useTransform(scrollYProgress, [0, 0.2], [0, -35])

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
    >
      <motion.path
        d="M0 520 Q120 480 200 500 T360 440 T480 460 T600 380 T720 400 T840 320 T960 340 T1080 260 T1200 280 T1320 220 L1440 240"
        stroke="#C8A45D"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        opacity="0.1"
        style={{ translateY: yGold }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease, delay: 0.3 }}
      />
      <motion.path
        d="M0 560 Q160 530 280 545 T440 500 T560 510 T680 460 T800 470 T920 410 T1040 420 T1160 370 T1280 380 L1440 350"
        stroke="#0A1628"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        opacity="0.06"
        style={{ translateY: yNavy }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease, delay: 0.6 }}
      />
    </svg>
  )
}
