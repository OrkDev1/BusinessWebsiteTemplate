import React, { useState } from "react";
import { TvMinimal, SunMedium, Moon, List, SquareArrowOutUpRight, SettingsIcon, LogOut, UserRound, LayoutDashboard, Mail, LockKeyhole, CreditCard, Info } from "lucide-react";

export default function Settings() {
  const userEmail = "example1234444@gmail.com";
  const userName = "Adam Sandler";
  const subStatus = false;
  return (
    <div>
      <div>
        <button onClick={() => document.getElementById("my_modal_1").showModal()} className={`relative transition z-10 p-2 flex items-center hover:opacity-100 opacity-60`}>
          <LayoutDashboard size="28" />
        </button>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h2 className="font-bold text-2xl text-center">DASHBOARD</h2>
          {/** Section 1 **/}
          <h2 className="mt-6 font-semibold text-lg text-left">Account Information</h2>
          <div className="flex sm:flex-row flex-col gap-1 w-full py-2">
            <div className="card card-border w-full sm:w-1/3">
              <div className="card-body flex flex-col items-center justify-center">
                <UserRound size="32" />
                <div className="badge cursor-default text-center sm:text-left badge-soft h-fit w-full tooltip tooltip-bottom" data-tip={userName}>
                  <p className="text-nowrap overflow-hidden text-ellipsis">{userName}</p>
                </div>
              </div>
            </div>
            <div className="card card-border w-full sm:w-1/3">
              <div className="card-body flex flex-col items-center justify-center">
                <Mail size="32" />
                <div className="badge cursor-default text-center sm:text-left badge-soft h-fit w-full tooltip tooltip-bottom" data-tip={userEmail}>
                  <p className="text-nowrap overflow-hidden text-ellipsis">{userEmail}</p>
                </div>
              </div>
            </div>
            <div className="card card-border w-full sm:w-1/3">
              <div className="card-body flex flex-col items-center justify-center">
                <LockKeyhole size="32" />
                <div className="btn btn-primary h-fit w-full tooltip tooltip-bottom" data-tip="Change Password">
                  <p className="text-nowrap overflow-hidden text-ellipsis">Change Password</p>
                </div>
              </div>
            </div>
          </div>
          {/** Section 2 **/}
          <h2 className="font-semibold text-lg text-left mt-2">Billing & Subscription</h2>
          <div className="w-full py-2">
            <div className="card card-border">
              <div className="card-body">
                <div className="flex sm:flex-row flex-col items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Info size="18" />
                    <h3 className="font-semibold text-lg">Status</h3>
                  </div>
                  <div className={`badge cursor-default badge-soft ${subStatus ? "badge-success" : "badge-error"}`}>{subStatus ? "ACTIVE" : "INACTIVE"}</div>
                </div>
                <div className="flex sm:flex-row flex-col items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard size="18" />
                    <h3 className="font-semibold text-lg">Payment Method</h3>
                  </div>
                  <button className="btn btn-primary text-wrap h-min w-full sm:w-fit">Change Payment</button>
                </div>
                <div className="flex sm:flex-row flex-col items-center justify-between">
                  <div className="flex items-center gap-2">
                    <List size="18" />
                    <h3 className="font-semibold text-lg">Subscription</h3>
                  </div>
                  <button className="btn btn-primary text-wrap h-min w-full sm:w-fit">Manage Subscription</button>
                </div>
              </div>
            </div>
          </div>
          {/** Section 3 **/}
          <h2 className="font-semibold text-lg text-left mt-2">Preferences</h2>
          <div className="w-full py-2">
            <div className="card card-border">
              <div className="card-body">
                <div className="flex sm:flex-row flex-col items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TvMinimal size="18" />
                    <h3 className="font-semibold text-lg">Theme</h3>
                  </div>
                  <label className="toggle toggle-lg text-content items-center justify-center">
                    <input type="checkbox" value="DarkCoffee" className="theme-controller" />
                    <SunMedium size="18" />
                    <Moon size="18" />
                  </label>
                </div>
                <div className="flex sm:flex-row flex-col items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LogOut size={18} />
                    <h3 className="font-semibold text-lg">Sign Out</h3>
                  </div>
                  <button className="relative btn btn-primary translate-0 text-wrap h-fit w-full sm:w-fit" onClick={() => console.log("SignOut Event")}>
                    <p className="mr-auto">Sign Out</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/** Section 4 **/}
          <h2 className="font-semibold text-lg text-left mt-2">Service Panel</h2>
          <div className="w-full py-2">
            <div className="card card-border">
              <div className="card-body">
                <button className="relative mt-1 w-full btn btn-primary" onClick={() => console.log("Go To Dashboard Event")}>
                  <p className="uppercase">Go To Dashboard</p>
                  <SquareArrowOutUpRight size={20} className="absolute right-2" />
                </button>
              </div>
            </div>
          </div>
          {/** Buttons **/}
          <div className="modal-action">
            <form method="dialog" className="gap-1 flex">
              <button className="btn btn-outline">Close</button>
              <button className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
