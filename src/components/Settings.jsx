import React from "react";

export default function Settings() {
  const userEmail = "example@gmail.com";
  const userName = "Adam Sandler";
  const subStatus = false;
  const paymentCard = "**** 4576";
  return (
    <div className="w-full h-full bg-amber-300 flex flex-col">
      <input type="checkbox" value="cupcake" className="toggle theme-controller" />

      <h2 className="text-2xl font-bold tracking-tighter">Account Settings</h2>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <div className="flex flex-col">
            <h2 className="card-title">Name:</h2>
            <p className="text-gray-500 font-semibold">{userName}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="card-title">Email:</h2>
            <p className="text-gray-500 font-semibold">{userEmail}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="card-title">Password</h2>
            <button className="btn h-full btn-error">Reset</button>
          </div>
        </div>
      </div>

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
    </div>
  );
}
