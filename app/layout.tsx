import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francesco Paolo Ragusa - Web Developer & IT Consultant",
  description: "Portfolio moderno di Francesco Paolo Ragusa - Web Developer, IT Consultant e Studente di Informatica",
  keywords: "web developer, IT consultant, informatica, portfolio, Francesco Paolo Ragusa, modern design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
