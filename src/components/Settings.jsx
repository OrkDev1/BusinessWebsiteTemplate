import React from "react";
import { FaRegUser, FaRegEnvelope, FaLock, FaRegCreditCard } from "react-icons/fa";

export default function Settings() {
  const userEmail = "example1234444@gmail.com";
  const userName = "Adam Sandler";
  const subStatus = false;
  const paymentCard = "**** 4576";
  return (
    <div className="w-full h-full flex flex-col">
      <input type="checkbox" value="cupcake" className="toggle theme-controller" />
      <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}>
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h2 className="font-bold text-2xl text-center">Settings</h2>
          {/** Section 1 **/}
          <h2 className="font-semibold text-lg text-left">Account Information</h2>
          <div className="flex gap-1 w-full py-2">
            <div className="card card-border w-1/3">
              <div className="card-body flex flex-col items-center justify-center">
                <FaRegUser size="32" className="text-neutral" />
                <div className="badge badge-soft h-fit w-full tooltip tooltip-bottom" data-tip={userName}>
                  <p className="text-nowrap overflow-hidden text-ellipsis">{userName}</p>
                </div>
              </div>
            </div>
            <div className="card card-border w-1/3">
              <div className="card-body flex flex-col items-center justify-center">
                <FaRegEnvelope size="32" className="text-neutral" />
                <div className="badge badge-soft h-fit w-full tooltip tooltip-bottom" data-tip={userEmail}>
                  <p className="text-nowrap overflow-hidden text-ellipsis">{userEmail}</p>
                </div>
              </div>
            </div>
            <div className="card card-border w-1/3">
              <div className="card-body flex flex-col items-center justify-center">
                <FaLock size="32" className="text-neutral" />
                <div className="btn btn-secondary h-fit w-full tooltip tooltip-bottom" data-tip="Change Password">
                  <p className="text-nowrap overflow-hidden text-ellipsis">Change Password</p>
                </div>
              </div>
            </div>
          </div>
          {/** Section 2 **/}
          <h2 className="font-semibold text-lg text-left mt-2">Billing</h2>
          <div className="w-full py-2">
            <div className="card card-border">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaRegCreditCard size="18" />
                    <h3 className="font-semibold text-">Name</h3>
                  </div>
                  <div className="badge badge-soft badge-info">Display Name Here</div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Password</h3>
                  <button className="btn btn-info">Change Password</button>
                </div>
              </div>
            </div>
          </div>
          {/** Section 3 **/}
          <h2 className="font-semibold text-lg text-left mt-2">Subscription</h2>
          <div className="w-full py-2">
            <div className="card card-border">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaRegUser size="18" />
                    <h3 className="font-semibold text-">Name</h3>
                  </div>
                  <div className="badge badge-soft badge-info">Display Name Here</div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Password</h3>
                  <button className="btn btn-info">Change Password</button>
                </div>
              </div>
            </div>
          </div>
          {/** Buttons **/}
          <div className="modal-action">
            <form method="dialog" className="gap-1 flex">
              <button className="btn btn-secondary">Close</button>
              <button className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </dialog>

      <h2 className="text-2xl font-bold tracking-tighter">Subscription</h2>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <div className="flex flex-col">
            <h2 className="card-title">Status:</h2>
            <p className={`font-semibold text-lg ${subStatus ? " text-success" : " text-error"}`}>{subStatus ? "Active" : "Inactive"}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="card-title">Subscription Settings:</h2>
            <button className="btn h-full btn-info">Change</button>
          </div>
          <div className="flex flex-col">
            <h2 className="card-title">Cancel Subscription:</h2>
            <button className="btn h-full btn-error">Cancel</button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold tracking-tighter">Payment</h2>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <div className="flex flex-col">
            <h2 className="card-title">Method:</h2>
            <p className="text-gray-500 font-semibold">Card: {paymentCard}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="card-title">Subscription Settings:</h2>
            <button className="btn h-full btn-info">Change</button>
          </div>
          <div className="flex flex-col">
            <h2 className="card-title">Cancel Subscription:</h2>
            <button className="btn h-full btn-error">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
