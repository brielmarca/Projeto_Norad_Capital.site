import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

type Variant =
  | "growth"
  | "institutional"
  | "solutions"
  | "equity"
  | "realestate"
  | "process"
  | "contact"

const ease = [0.16, 1, 0.3, 1] as const

const paths: Record<Variant, { gold: string; navy: string }> = {
  growth: {
    gold: "M-3000 520 L-2000 520 L-1000 520 L0 520 Q120 480 200 500 T360 440 T480 460 T600 380 T720 400 T840 320 T960 340 T1080 260 T1200 280 T1320 220 L1440 240 L2440 240 L3440 240 L4440 240",
    navy: "M-3000 560 L-2000 560 L-1000 560 L0 560 Q160 530 280 545 T440 500 T560 510 T680 460 T800 470 T920 410 T1040 420 T1160 370 T1280 380 L1440 350 L2440 350 L3440 350 L4440 350",
  },
  institutional: {
    gold: "M-3000 400 L-2000 400 L-1000 400 L0 400 C180 370 280 490 440 450 C600 410 680 330 860 370 C1040 410 1120 300 1280 340 C1360 360 1400 320 1440 330 L2440 330 L3440 330 L4440 330",
    navy: "M-3000 450 L-2000 450 L-1000 450 L0 450 C220 420 320 530 480 490 C640 450 720 380 900 410 C1080 440 1160 340 1320 380 C1380 395 1420 360 1440 365 L2440 365 L3440 365 L4440 365",
  },
  solutions: {
    gold: "M-3000 500 L-2000 500 L-1000 500 L0 500 L220 500 L220 380 L440 380 L440 440 L660 440 L660 300 L880 300 L880 400 L1100 400 L1100 260 L1320 260 L1440 270 L2440 270 L3440 270 L4440 270",
    navy: "M-3000 540 L-2000 540 L-1000 540 L0 540 L260 540 L260 420 L500 420 L500 480 L720 480 L720 340 L940 340 L940 440 L1160 440 L1160 300 L1360 300 L1440 310 L2440 310 L3440 310 L4440 310",
  },
  equity: {
    gold: "M-3000 560 L-2000 560 L-1000 560 L0 560 C180 540 260 480 440 460 C620 440 700 370 880 350 C1060 330 1180 280 1320 260 L1440 250 L2440 250 L3440 250 L4440 250",
    navy: "M-3000 600 L-2000 600 L-1000 600 L0 600 C220 580 300 520 500 500 C700 480 780 410 960 390 C1140 370 1220 320 1360 300 L1440 290 L2440 290 L3440 290 L4440 290",
  },
  realestate: {
    gold: "M-3000 420 L-2000 420 L-1000 420 L0 420 Q180 320 360 420 T720 340 T1080 440 T1440 300 L2440 300 L3440 300 L4440 300",
    navy: "M-3000 470 L-2000 470 L-1000 470 L0 470 Q220 370 400 470 T760 390 T1120 490 T1440 350 L2440 350 L3440 350 L4440 350",
  },
  process: {
    gold: "M-3000 500 L-2000 500 L-1000 500 L0 500 L200 500 L200 380 L400 380 L400 460 L600 460 L600 300 L800 300 L800 420 L1000 420 L1000 280 L1200 280 L1200 340 L1440 340 L2440 340 L3440 340 L4440 340",
    navy: "M-3000 540 L-2000 540 L-1000 540 L0 540 L250 540 L250 420 L450 420 L450 500 L650 500 L650 340 L850 340 L850 460 L1050 460 L1050 320 L1250 320 L1250 380 L1440 380 L2440 380 L3440 380 L4440 380",
  },
  contact: {
    gold: "M-3000 340 L-2000 340 L-1000 340 L0 340 C240 300 400 480 640 420 C880 360 1040 460 1280 400 C1360 380 1400 390 1440 385 L2440 385 L3440 385 L4440 385",
    navy: "M-3000 390 L-2000 390 L-1000 390 L0 390 C280 350 440 520 680 460 C920 400 1080 500 1320 440 C1380 425 1410 430 1440 425 L2440 425 L3440 425 L4440 425",
  },
}

interface Props {
  variant?: Variant
}

export default function HeroLineBackground({ variant = "growth" }: Props) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const yGold = useTransform(scrollYProgress, [0, 0.2], [0, shouldReduceMotion ? 0 : 50])
  const yNavy = useTransform(scrollYProgress, [0, 0.2], [0, shouldReduceMotion ? 0 : -35])
  const { gold, navy } = paths[variant]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <motion.path
          d={gold}
          stroke="#C8A45D"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          opacity="0.12"
          style={{ translateY: yGold }}
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 2.5, ease, delay: 0.3 }}
        />
        <motion.path
          d={navy}
          stroke="#0A1628"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          opacity="0.06"
          style={{ translateY: yNavy }}
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 2.5, ease, delay: 0.6 }}
        />
      </svg>
    </div>
  )
}
