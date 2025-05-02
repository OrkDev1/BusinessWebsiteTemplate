import React, { useState } from "react";
import { ChevronRight, Mail, MessageCircle, CircleCheck, LockKeyhole, UserRound } from "lucide-react";
export default function Contact() {
  const [contactType, setContactType] = useState(0);
  return (
    <section className="max-w-5xl w-full text-center mx-auto px-4 z-0">
      {contactType == 0 && (
        <>
          <h1 className="sm:block mb-6 text-5xl font-medium tracking-[-0.0325em] leading-[1.1] text-balance text-base-content">How Can We Help?</h1>
          <h2 className="sm:block text-base-content/70 text-2xl leading-[28px] tracking-[-0.37px] font-medium">Get in touch with our sales and support teams</h2>
          {/* Card 1 */}
          <div className="flex gap-4 py-14 mt-10 items-center justify-center flex-col sm:flex-row">
            <div className="card shadow-primary shadow-sm card-lg w-96">
              <div className="card-body text-left">
                <h2 className="text-xl items-center flex font-semibold gap-2">
                  <Mail size={"20px"} />
                  Contact Sales
                </h2>
                <p className="py-2">Speak to sales about plans, pricing, enterprise contracts.</p>
                <div className=" mt-2">
                  <button onClick={() => setContactType(1)} className="btn btn-md btn-outline border-0 shadow-sm shadow-primary">
                    Talk To Sales <ChevronRight size={"18px"} />
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card card-lg shadow-sm shadow-primary w-96">
              <div className="card-body text-left">
                <h2 className="text-xl items-center flex font-semibold gap-2">
                  <MessageCircle size={"20px"} />
                  Help & Support
                </h2>
                <p className="py-2">Ask product questions, report problems, or leave feedback.</p>
                <div className=" mt-2">
                  <button onClick={() => setContactType(2)} className="btn btn-md btn-outline border-0 shadow-sm shadow-primary">
                    Contact Support <ChevronRight size={"18px"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {contactType == 1 && (
        <>
          <div className="flex md:items-start items-center gap-4 py-14 flex-col md:flex-row p-10 justify-between w-full">
            <div className="md:text-left text-center md:items-start items-center flex flex-col p-2">
              <h1 className="text-5xl font-medium tracking-[-0.0325em] leading-[1.1] text-balance text-base-content">Contact Us</h1>
              <ul className="py-4 hidden md:block">
                <li className="flex items-center gap-1">
                  <CircleCheck size={"18px"} />
                  Request demo
                </li>
                <li className="flex items-center gap-1 mt-1">
                  <CircleCheck size={"18px"} />
                  Get help desk
                </li>
                <li className="flex items-center gap-1 mt-1">
                  <CircleCheck size={"18px"} />
                  Contact sales
                </li>
              </ul>
              <div className="py-4 mt-auto mb-auto flex flex-col items-center md:items-start text-base-content/50">
                <p>Technical issues or product questions?</p>
                <button onClick={() => setContactType(2)} className="link link-hover flex items-center gap-1">
                  Contact Tech Support
                  <ChevronRight size={"18px"} className="mt-0.5" />
                </button>
              </div>
            </div>
            <div className="border-2 max-w-md w-full border-base-300 md:w-2/5 rounded-box text-left">
              <div className="border-b-2 border-base-300 w-full p-5">Tell us how can we help</div>
              <form className="w-full space-y-5 p-5">
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="font-semibold text-base-content">Full name</p>
                    <div className="input input-md w-full mt-1">
                      <UserRound color="#aaa" />
                      <input placeholder="example@gmail.com" type="email" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-base-content">Work email</p>
                    <div className="input input-md w-full mt-1">
                      <Mail color="#aaa" />
                      <input placeholder="example@gmail.com" type="email" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-base-content">Company size</p>
                    <select defaultValue="1-10" className="select select-md w-full mt-1">
                      <option>1-10</option>
                      <option>10-100</option>
                      <option>100-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                  <div>
                    <p className="font-semibold text-base-content">How can we help?</p>
                    <textarea className="textarea textarea-md w-full mt-1" placeholder="Bio" />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center gap-1">
                  <h1 className="text-base-content/60 text-sm md:block flex gap-1">
                    You can also email us at <p className="link link-hover">kurwa@bober.com</p>
                  </h1>
                  <button type="submit" className="btn btn-sm btn-primary font-semibold py-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
