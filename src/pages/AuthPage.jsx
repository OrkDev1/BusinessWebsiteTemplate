import { useState } from "react";
import { FaAngleLeft, FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

export default function AuthPage() {
  const [authType, setAuthType] = useState(false);

  return (
    <div className="relative w-full flex flex-col justify-center items-center p-8">
      <button onClick={() => (window.location = "/")} className="btn btn-xs py-3 absolute top-2 left-2 rounded-field">
        <FaAngleLeft color="#aaa" height={32} width={32} />
      </button>
      <div className="flex justify-center rounded-field mb-8 bg-base-200 p-1 shadow-inner w-full max-w-3xs">
        <button className={`w-1/2 py-1 rounded-field transition font-semibold ${!authType ? "bg-primary text-white" : "text-gray-500"}`} onClick={() => setAuthType(false)}>
          Sign Up
        </button>
        <button className={`w-1/2 py-1 rounded-field transition font-semibold ${authType ? "bg-primary text-white" : "text-gray-500"}`} onClick={() => setAuthType(true)}>
          Sign In
        </button>
      </div>

      {/* Form Content */}
      <div className="w-full h-full max-w-md">{authType ? <SignIn /> : <SignUp />}</div>
    </div>
  );
}
