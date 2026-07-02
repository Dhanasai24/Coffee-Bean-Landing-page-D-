"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="bottom-right" toastOptions={{ className: "bg-coffee-900 text-cream-50 border-coffee-300" }} />
    </>
  );
}