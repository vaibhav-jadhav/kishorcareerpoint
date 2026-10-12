"use client";

import { useEffect } from "react";

/**
 * Registers the offline service worker. Production only: in development the
 * worker would cache hot-reload files and hide your changes.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
        // The site works without it, so a failed registration is not shown to visitors.
      });
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  return null;
}
