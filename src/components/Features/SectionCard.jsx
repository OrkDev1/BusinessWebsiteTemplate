import React from "react";
import { AlertCircle, Flame, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { blurPopUp } from "../../Animations/animations";

const updateCards = [
  {
    id: "update-card-1",
    Icon: <AlertCircle />,
    badgeTitle: "Off track",
    title: "Unexpected response…",
    time: "Jul 20",
    badgeColor: "text-error fill-error",
  },
  {
    id: "update-card-2",
    Icon: <Flame />,
    badgeTitle: "At risk",
    title: "Progress slowed down..",
    time: "Sep 22",
    badgeColor: "text-warning fill-warning",
  },
  {
    id: "update-card-3",
    Icon: <Zap />,
    badgeTitle: "On track",
    title: "Client agreement complete 🥳",
    time: "Sep 11",
    badgeColor: "text-success fill-success",
  },
];
const SecondCard = () => {
  return (
    <div className="relative py-14 mt-10 w-full">
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-base-100 via-base-100/70 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-base-100 via-base-100/70 to-transparent pointer-events-none z-10" />
      <div className="flex flex-col xl:flex-row h-full w-full">
        <div className="p-10 xl:border-r-2 border-base-300 w-full xl:w-1/2">
          <motion.h1
            variants={blurPopUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            className="text-5xl xl:text-left text-center font-medium tracking-[-0.0325em] leading-[1.1] text-balance text-base-content"
          >
            Notifications
          </motion.h1>
          <motion.h2 className="text-2xl xl:text-left text-center mt-2 leading-[28px] tracking-[-0.37px] text-base-content/70 font-medium">Immidiately get notified when something important happens</motion.h2>
          <motion.ul className="w-full gap-4 xl:mt-0 mt-4 xl:block flex items-center justify-center" variants={blurPopUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
            <li className="py-3 xl:mt-4 flex items-center gap-2 text-lg font-semibold">
              <AlertCircle className="text-primary/60 drop-shadow-lg drop-shadow-primary" /> Real-Time allerts
            </li>
            <li className="py-3 flex items-center gap-2 text-lg font-semibold">
              <AlertCircle className="text-primary/60 drop-shadow-lg drop-shadow-primary" /> Quick updates
            </li>
            <li className="py-3 flex items-center gap-2 text-lg font-semibold">
              <AlertCircle className="text-primary/60 drop-shadow-lg drop-shadow-primary" /> Fast nitifications
            </li>
          </motion.ul>
        </div>
        <div className="w-full xl:w-1/2 relative h-96 perspective-[2000px] perspective-origin-center">
          <div className="absolute inset-0 z-10 opacity-100 pointer-events-none bg-gradient-to-l from-base-100 to-transparent via-30%"></div>
          {updateCards.map((card, idx) => (
            <UpdateCard Icon={card.Icon} key={card.id} index={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const UpdateCard = ({ index, Icon, badgeTitle, title, time, badgeColor }) => {
  const transforms = [
    "border-error skew-y-[-4deg] rotate-x-[15deg] rotate-y-[-10deg] translate-x-[-5%] hover:translate-y-[-75%] hover:bg-error/20 translate-y-[-50%] z-[4]",
    "border-warning skew-y-[-4deg] rotate-x-[15deg] rotate-y-[-10deg] translate-x-[3%] hover:translate-y-[-15%] hover:bg-warning/20 translate-y-[-0%] z-[5]",
    "border-success skew-y-[-4deg] rotate-x-[15deg] rotate-y-[-10deg] translate-x-[11%] hover:translate-y-[35%] hover:bg-success/20 translate-y-[50%] z-[6]",
  ];

  return (
    <div className={`absolute ${index == 2 ? "" : "grayscale"} hover:grayscale-0 cursor-pointer transition-all duration-500 h-32 inset-0 m-auto w-96 p-4 opacity-90 backdrop-blur-lg rounded-box border-2 shadow-sm shadow-primary ${transforms[index]}`}>
      <div className={`flex items-center gap-2 mb-2 font-medium ${badgeColor}`}>
        <div className={`h-full rounded-full ${badgeColor}`}>{Icon}</div>
        <span className="text-xl">{badgeTitle}</span>
      </div>
      <span className="block text-lg leading-[23px] mb-3 font-medium text-base-content">{title}</span>
      <span className="block text-md leading-[23px] text-base-content opacity-60">{time}</span>
    </div>
  );
};

export default SecondCard;
