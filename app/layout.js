import { Poiret_One, Josefin_Sans } from "next/font/google";

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
      <body className={`${poiretOne.variable} ${josefinSans.variable}`}>
        <Header />
        <ResponsiveAccordion>{children}</ResponsiveAccordion>
      </body>
    </html>
  );
}
