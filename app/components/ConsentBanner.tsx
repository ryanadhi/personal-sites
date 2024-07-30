"use client";
import { useState, useEffect } from "react";

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("analytics_consent");
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (given: boolean) => {
    localStorage.setItem("analytics_consent", given.toString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md flex justify-between">
      <p>We use cookies to analyze our traffic. Please accept if you are ok with this.</p>
      <div className="">
        <button
          onClick={() => handleConsent(true)}
          className="mr-2 bg-slate-400 text-slate-800 text-sm px-2 py-1 rounded-md"
        >
          Accept
        </button>
        <button onClick={() => handleConsent(false)} className="text-sm border border-slate-400 px-2 py-1 rounded-md">
          Decline
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
