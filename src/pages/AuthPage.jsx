import { useState } from "react";
import { FaAngleLeft, FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

export default function AuthPage() {
  const [authType, setAuthType] = useState(false);

  return (
    <div className="min-h-screen flex bg-base-100 flex-col md:flex-row">
      {/* Left Side Graphic */}
      <div className=" relative hidden md:flex w-full md:w-2/5 bg-primary text-white items-center justify-center p-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Welcome!</h2>
          <p className="text-lg">Log in or create your account to continue.</p>
          <input type="checkbox" value="cupcake" className="toggle theme-controller" />
        </div>
      </div>

      {/* Right Side Form & Switch */}
      <div className="relative w-full md:w-3/5 flex flex-col justify-center items-center p-8">
        <button onClick={() => (window.location = "/")} className="btn btn-xs py-3 absolute top-2 left-2 rounded-field">
          <FaAngleLeft color="#aaa" height={32} width={32} />
        </button>
        <div className="flex justify-center rounded-field mb-8 bg-base-200 p-1 shadow-inner w-full max-w-xs">
          <button className={`w-1/2 py-2 rounded-field transition font-semibold ${!authType ? "bg-primary text-white" : "text-gray-500"}`} onClick={() => setAuthType(false)}>
            Sign Up
          </button>
          <button className={`w-1/2 py-2 rounded-field transition font-semibold ${authType ? "bg-primary text-white" : "text-gray-500"}`} onClick={() => setAuthType(true)}>
            Sign In
          </button>
        </div>

        {/* Form Content */}
        <div className="w-full h-full max-w-md">{authType ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  );
}
