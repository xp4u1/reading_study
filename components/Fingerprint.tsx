"use client";

import { useEffect } from "react";

import FingerprintJS from "@fingerprintjs/fingerprintjs";

/**
 * Calculates a fingerprint and stores it in local storage.
 */
export default function Fingerprint() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const calculateFingerprint = async () => {
      const fingerprint = await FingerprintJS.load();
      const { visitorId } = await fingerprint.get();

      localStorage.setItem("fingerprint", visitorId);
    };

    calculateFingerprint();
  }, []);

  return null;
}
