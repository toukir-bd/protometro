
import localFont from "next/font/local";
export const mont = localFont({
  src: [
    {
      path: "/Mont-100.otf",
      style: "normal",
    },
    {
      path: "/Mont-200.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/Mont-300.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/Mont-400.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/Mont-500.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/Mont-600.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/Mont-700.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/Mont-800.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-mont",
  display: "swap",
  preload: false,
});

export const denton = localFont({
  src: [
    {
      path: "/Denton-100.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "/Denton-300.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/Denton-400.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/Denton-500.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/Denton-700.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/Denton-800.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/Denton-900.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-denton",
  display: "swap",
  preload: false,
});