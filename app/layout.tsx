import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPCXDOGE | The X Doge",
  description: "DOGE consensus × SPCXB narrative. Just a Doge with an X.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
