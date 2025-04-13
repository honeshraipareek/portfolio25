import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/pacifico";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portflio | 2025",
  description: "Honesh Rai Pareek | UX Designer | Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-100 to-slate-300 min-h-screen text-grey-800`}
      >
        {children}
      </body>
    </html>
  );
}
