"use client";

import { useEffect, useState } from "react";
import Icon from "../app/icon.png";
import Image from "next/image";

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent default mini banner
      setDeferredPrompt(e); // Save the event to trigger later
    };

    const handleAppInstalled = () => {
      setInstalled(true); // hide button after install
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // Show the install dialog
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User response to install:", outcome);

    setDeferredPrompt(null); // Clear it
  };

  if (installed || !deferredPrompt) return null; // hide if already installed or not ready

  return (
    <div className="fixed bg-base-200 p-5 z-9999 bottom-0 right-0 w-full">
      <div className="flex justify-center gap-5 items-center mx-auto">
        <div className="tooltip" data-tip="BoardsFast Logo">
          <Image src={Icon} alt="logo" className="size-15" />
        </div>

        <div className="flex flex-col text-sm space-y-2">
          <h1>Add BoardsFast to your Home Screen</h1>

          <button
            className="btn btn-primary btn-sm flex justify-center items-center"
            onClick={handleInstallClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line"
            >
              <path d="M12 17V3" />
              <path d="m6 11 6 6 6-6" />
              <path d="M19 21H5" />
            </svg>

            <span>
              Install
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
