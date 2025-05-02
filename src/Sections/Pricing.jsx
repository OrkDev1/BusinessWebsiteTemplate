import { Check, X } from "lucide-react";
import BlurPopUpByWord from "./Hero-Lib/BlurPopUpByWord";
import { blurPopUp } from "../Animations/animations"; // Make sure this file exists
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    note: "Free for everyone",
    features: [
      { label: "100 Gmail follow-ups/month", included: true },
      { label: "Limited voice actions", included: true },
      { label: "Phone calls", included: false },
      { label: "CRM sync", included: false },
      { label: "Basic analytics", included: false },
    ],
    button: "Get started",
    border: true,
  },
  {
    name: "Basic",
    price: "$30",
    suffix: "/month",
    note: "Billed yearly",
    features: [
      { label: "All Free features +", included: true },
      { label: "1,000 Gmail follow-ups", included: true },
      { label: "50 phone calls", included: true },
      { label: "Basic CRM integration", included: false },
      { label: "Email-based support", included: false },
    ],
    button: "Get started",
    border: false,
  },
  {
    name: "Business",
    price: "$69.99",
    suffix: "/month",
    note: "Billed yearly",
    features: [
      { label: "All Basic features +", included: true },
      { label: "10,000 Gmail actions", included: true },
      { label: "Voice AI Routing", included: true },
      { label: "Multi-agent support", included: true },
      { label: "CRM Sync & Enrichment", included: true },
      { label: "Calendar & Inbox APIs", included: false },
    ],
    button: "Get started",
    highlight: true,
    border: false,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    note: "Annual billing only",
    features: [
      { label: "All Business features +", included: true },
      { label: "Dedicated agent models", included: true },
      { label: "SLA & compliance reports", included: true },
      { label: "SSO / SCIM", included: true },
      { label: "Advanced audit logging", included: true },
      { label: "Onboarding & support", included: true },
    ],
    button: "Request trial",
    border: false,
  },
];

export default function PricingTable() {
  return (
    <div className="px-4 py-20 text-center">
      <motion.h1
        variants={blurPopUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="sm:block mb-6 text-5xl font-medium tracking-[-0.0325em] leading-[1.1] text-balance text-base-content"
      >
        Pricing
      </motion.h1>
      <motion.h2
        variants={blurPopUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="sm:block text-base-content/70 text-2xl leading-[28px] tracking-[-0.37px] font-medium"
      >
        Rangins subscriptions for your needs
      </motion.h2>
      <div className="max-w-6xl mx-auto py-14 h-fit flex lg:flex-row flex-col gap-4 rounded-xl">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={blurPopUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 * idx }}
            className={`border-2 w-full rounded-box border-base-300 flex flex-col justify-between ${plan.highlight ? "ring-2 ring-primary/80 border-none bg-base-100" : ""}`}
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-2xl font-bold">
                {plan.price} <span className="text-sm font-normal">{plan.suffix}</span>
              </p>
              <p className="text-sm mt-2">{plan.note}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2">
                    {feature.included ? <Check className="w-4 h-4 text-success mt-1" /> : <X className="w-4 h-4 text-error mt-1" />}
                    {feature.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button className={`w-full btn font-medium ${plan.highlight ? "btn btn-primary" : ""}`}>{plan.button}</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
