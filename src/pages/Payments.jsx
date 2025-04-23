import { useEffect, useState } from "react";

export function BuyButton() {
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

  // New effect to simulate clicking the link after it's rendered
  useEffect(() => {
    if (lemonLoaded) {
      const interval = setInterval(() => {
        const button = document.querySelector(".lemonsqueezy-button");
        if (button) {
          button.click();
          clearInterval(interval);
        }
      }, 100); // Retry until button is found

      // Stop retrying after a few seconds just in case
      setTimeout(() => clearInterval(interval), 5000);
    }
  }, [lemonLoaded]);

  return (
    <>
      {lemonLoaded ? (
        <a href="https://orkdev.lemonsqueezy.com/checkout/buy/cb58fe42-eed4-4176-b44e-9b933270e244?embed=1" className="lemonsqueezy-button">
          Purchase my product
        </a>
      ) : (
        <p>Please wait...</p>
      )}
    </>
  );
}

export default function Payments() {
  return (
    <div>
      <BuyButton />
    </div>
  );
}
