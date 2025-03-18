import { Poiret_One, Josefin_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";

// If loading a variable font, you don't need to specify the font weight
const poiretOne = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiretOne",
});

const josefinSans = Josefin_Sans({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-josefinSans",
});

const inter = Inter({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-inter",
});

// Font files can be colocated inside of `app`
const fonsecaMedium = localFont({
  src: "./fonseca/Fonseca-Medium.otf",
  display: "swap",
  variable: "--font-fonseca-medium",
});

const fonsecaLight = localFont({
  src: "./fonseca/Fonseca-Light.otf",
  display: "swap",
  variable: "--font-fonseca-light",
});

const fonsecaThin = localFont({
  src: "./fonseca/Fonseca-Thin.otf",
  display: "swap",
  variable: "--font-fonseca-thin",
});

// Add fontawesome
// https://docs.fontawesome.com/web/use-with/react
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";
import Header from "./components/header";
import ResponsiveAccordion from "./components/responsiveness-accordion";

export const metadata = {
  title: "1PA",
  description: "Thrive independently in an AI-driven world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poiretOne.variable} ${josefinSans.variable} ${inter.variable} ${fonsecaMedium.variable} ${fonsecaLight.variable} ${fonsecaThin.variable}`}
      >
        <Header />
        <ResponsiveAccordion>{children}</ResponsiveAccordion>
      </body>
    </html>
  );
}
