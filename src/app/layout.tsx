import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Batch System Assignment",
  description: "Assignment from Batch System.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-100 font-clash text-black">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
