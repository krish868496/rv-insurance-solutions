"use client";

// Wrapper around react-hot-toast to match your existing structure
import * as React from "react";
import toastLib, { Toaster as HotToaster, ToastOptions } from "react-hot-toast";

// ✅ match your existing types
export type ToastActionElement = React.ReactNode;

export type ToastProps = ToastOptions & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  type?: "success" | "error" | "info";
};

// mimic the same toast() API
export function toast({
  title,
  description,
  type = "info",
  ...options
}: ToastProps) {
  const message = (
    <div className="flex flex-col">
      {title && <strong className="font-medium">{title}</strong>}
      {description && (
        <span className="text-sm text-gray-700">{description}</span>
      )}
    </div>
  );

  switch (type) {
    case "success":
      toastLib.success(message, options);
      break;
    case "error":
      toastLib.error(message, options);
      break;
    default:
      toastLib(message, options);
      break;
  }

  return {
    dismiss: toastLib.dismiss,
    update: toastLib, // kept for compatibility
  };
}

// ✅ provide useToast hook (for backward compatibility)
export function useToast() {
  return {
    toast,
    dismiss: toastLib.dismiss,
  };
}

// ✅ create wrapper Toaster component (so layout.tsx doesn’t break)
export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        className:
          "bg-white border shadow-md rounded-lg px-4 py-2 text-sm text-gray-900",
        success: {
          className:
            "bg-green-50 border border-green-300 text-green-900 px-4 py-2 rounded-lg shadow-md",
        },
        error: {
          className:
            "bg-red-50 border border-red-300 text-red-900 px-4 py-2 rounded-lg shadow-md",
        },
      }}
    />
  );
}
