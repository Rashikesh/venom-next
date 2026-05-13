// import "./globals_old.css";
import "./globals.css";
import { EB_Garamond } from "next/font/google";

const eb = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb",
});
export const metadata = {
  title: "Harshikesh Bokade",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={eb.variable}>{children}</body>
    </html>
  );
}
