import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { Navbar } from "./components/nav";
import { PreloadResources } from "./preload";
import Cmdk from "./components/CmdK";
// import { ThemeProvider } from "@/components/theme-provider"
import { ThemeProvider } from "./components/theme-provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amaan Bhati Resume",
	description:
		"Amaan Bhati is a result driven final year Computer Science student with a strong aptitude for development and proficiency in modern frameworks. Eager to contribute technical skills and innovation to a dynamic software engineering role in a cutting-edge tech environment. Recognized for being a quick learner with the ability to swiftly adapt to new technology stacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
     <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
     <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Cmdk />
					<Navbar />
					{children}

					<PreloadResources />
				</main></ThemeProvider>
			</body>
      
    </html>
  );
}
