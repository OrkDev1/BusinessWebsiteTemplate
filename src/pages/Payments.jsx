import { oklch, formatHex } from "culori";
import { FaAngleLeft, FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";

export default function Payments() {
  const name = "USER-TEST";
  const email = "USER-TEST@gmail.com";
  const checkoutUrl = `https://orkdev.lemonsqueezy.com/checkout/buy/cb58fe42-eed4-4176-b44e-9b933270e244?embed=1&logo=0&desc=0&button_color=${getCSSVar("--color-primary")}&checkout[name]=${name}&checkout[email]=${email}`;
  function getCSSVar(name) {
    const oklchColor = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return "%23" + formatHex(oklch(oklchColor)).slice(1);
  }
  console.log(getCSSVar("--color-base-100"));
  return (
    <div className="w-full h-screen">
      <button onClick={() => (window.location = "/")} className="btn btn-xs py-3 absolute top-2 left-2 rounded-field">
        <FaAngleLeft color="#aaa" height={32} width={32} />
      </button>

      <div className="w-full h-full flex items-center justify-center">
        <iframe className="w-full h-full" allow="payment" src={checkoutUrl} />
      </div>
    </div>
  );
}
