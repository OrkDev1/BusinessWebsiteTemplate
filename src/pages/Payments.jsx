import { useState, useEffect } from "react";
import { oklch, formatHex } from "culori";
import { FaAngleLeft, FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

export default function AuthPage() {
  const [lemonLoaded, setLemonLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.lemonsqueezy.com/js/lemon.js";
    script.defer = true;
    script.onload = () => {
      setLemonLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function getCSSVar(name) {
    const oklchColor = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return "%23" + formatHex(oklch(oklchColor)).slice(1);
  }
  console.log(getCSSVar("--color-base-100"));
  return (
    <div className="h-screen flex bg-base-100 flex-col md:flex-row">
      {/* Left Side Graphic */}
      <div className=" relative hidden md:flex w-full md:w-2/5 bg-primary text-white items-center justify-center p-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Welcome!</h2>
          <p className="text-lg">Log in or create your account to continue.</p>
          <input type="checkbox" value="cupcake" className="toggle theme-controller" />
        </div>
      </div>

      {/* Right Side Form & Switch */}
      <div className="relative w-full overflow-hidden md:w-3/5 flex flex-col justify-center items-center">
        <button onClick={() => (window.location = "/")} className="btn btn-xs py-3 absolute top-2 left-2 rounded-field">
          <FaAngleLeft color="#aaa" height={32} width={32} />
        </button>

        {/* Form Content */}
        <div className="w-full h-full">
          {lemonLoaded ? (
            <iframe allow="payment" className="w-full border-none h-full" src={`https://orkdev.lemonsqueezy.com/checkout/buy/cb58fe42-eed4-4176-b44e-9b933270e244?embed=1&logo=0&desc=0&background_color=${getCSSVar("--color-base-100")}`}></iframe>
          ) : (
            <p>Please wait...</p>
          )}
        </div>
      </div>
    </div>
  );
}
