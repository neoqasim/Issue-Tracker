import type { Metadata } from "next";
import '@radix-ui/themes/styles.css';
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar"
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue tracker",
  description: "Created by Neo Qasim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <NavBar />
          <main>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
