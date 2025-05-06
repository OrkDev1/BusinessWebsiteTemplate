import React from "react";
import { Box, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../Lib/GlowingEffect";
import { oklch, formatHex } from "culori";
import { motion } from "framer-motion";
import { blurPopUp } from "../Animations/animations";
import SecondCard from "../components/Features/SectionCard";

function getCSSVar(name) {
  const oklchColor = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return "#" + formatHex(oklch(oklchColor)).slice(1);
}
export default function Features() {
  return (
    <div className="relative min-h-screen max-w-xs sm:max-w-xl md:max-w-3xl xl:max-w-6xl flex items-center justify-center pointer-events-auto flex-col">
      <div className="flex flex-col py-14 items-center justify-center">
        <motion.h1
          variants={blurPopUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          className="mb-6 mt-20 text-5xl font-medium tracking-[-0.0325em] leading-[1.1] text-balance text-base-content"
        >
          Features
        </motion.h1>
        <motion.h2
          variants={blurPopUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="sm:block text-base-content/70 text-2xl text-center w-2/3 leading-[28px] tracking-[-0.37px] font-medium"
        >
          Rangins subscriptions for your needs. Rangins subscriptions for your needs. Rangins subscriptions for your needs. Rangins subscriptions for your needs
        </motion.h2>
        <ul className="grid mt-20 grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2">
          <GridItem area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]" icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />} title="Do things the right way" delay={1} description="Running out of copy so I'll write anything." />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/2/8]"
            icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="The best AI code editor ever."
            delay={2}
            description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
          />

          <GridItem
            area="md:[grid-area:2/1/3/13] xl:[grid-area:1/5/2/13]"
            icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="This card is also built by Cursor"
            delay={3}
            description="I'm not even kidding. Ask my mom if you don't believe me."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            delay={4}
            icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Coming soon on Aceternity UI"
            description="I'm writing the code as I record this, no shit."
          />
        </ul>
      </div>
      <SecondCard />
      <div className="flex pt-30 py-14 flex-col items-center justify-center">
        <motion.h1
          variants={blurPopUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          className="mb-6 mt-auto text-5xl font-medium tracking-[-0.0325em] leading-[1.1] text-balance text-base-content"
        >
          Features
        </motion.h1>
        <motion.h2
          variants={blurPopUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="sm:block text-base-content/70 text-2xl text-center w-2/3 leading-[28px] tracking-[-0.37px] font-medium"
        >
          Rangins subscriptions for your needs. Rangins subscriptions for your needs. Rangins subscriptions for your needs. Rangins subscriptions for your needs
        </motion.h2>
        <ul className="flex flex-col w-full md:flex-row mt-20 gap-4">
          <div className="relative h-60  w-full rounded-box shadow-sm shadow-primary p-2 md:p-3">
            <GlowingEffect colors={[getCSSVar("--color-primary")]} blur={0.5} borderWidth={3} spread={80} glow={true} disabled={false} proximity={100} inactiveZone={0.01} />
            <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-box p-6 md:p-6 shadow-primary shadow-sm">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-field border border-base-content/80 p-2">
                  <Box className="h-4 w-4 text-base-content" />
                </div>
                <div className="space-y-3">
                  <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-base-content md:text-2xl/[1.875rem]">Best AI Agent</h3>
                  <h2 className="font-sans text-sm/[1.125rem] text-base-content md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-60  w-full rounded-box  shadow-sm shadow-primary p-2 md:p-3">
            <GlowingEffect colors={[getCSSVar("--color-primary")]} blur={0.5} borderWidth={3} spread={80} glow={true} disabled={false} proximity={100} inactiveZone={0.01} />
            <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-box p-6 md:p-6 shadow-primary shadow-sm">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-field border border-base-content/80 p-2">
                  {" "}
                  <Box className="h-4 w-4 text-base-content" />
                </div>
                <div className="space-y-3">
                  <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-base-content md:text-2xl/[1.875rem]">Best AI Agent</h3>
                  <h2 className="font-sans text-sm/[1.125rem] text-base-content md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-60  w-full rounded-box  shadow-sm shadow-primary p-2 md:p-3">
            <GlowingEffect colors={[getCSSVar("--color-primary")]} blur={0.5} borderWidth={3} spread={80} glow={true} disabled={false} proximity={100} inactiveZone={0.01} />
            <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-box p-6 md:p-6 shadow-primary shadow-sm">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-field border border-base-content/80 p-2">
                  <Box className="h-4 w-4 text-base-content" />
                </div>
                <div className="space-y-3">
                  <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-base-content md:text-2xl/[1.875rem]">Best AI Agent</h3>
                  <h2 className="font-sans text-sm/[1.125rem] text-base-content md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.</h2>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

const GridItem = ({ area, icon, title, description, delay }) => {
  return (
    <motion.li variants={blurPopUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * delay }} className={`h-72 min-h-60 list-none ${area}`}>
      <div className="relative h-full w-full rounded-box  shadow-sm shadow-primary p-2 md:p-3">
        <GlowingEffect colors={[getCSSVar("--color-primary")]} blur={0.5} borderWidth={3} spread={80} glow={true} disabled={false} proximity={100} inactiveZone={0.01} />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-box p-6 md:p-6 shadow-primary shadow-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-field border border-base-content/80 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-base-content md:text-2xl/[1.875rem]">{title}</h3>
              <h2 className="font-sans text-sm/[1.125rem] text-base-content md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">{description}</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
