import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ChatWidget from "@/components/ChatWidget";
import ErrorBoundary from "@/components/ErrorBoundary";

// Prevent fontawesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francesco Paolo Ragusa - Web Developer & IT Consultant",
  description: "Portfolio moderno di Francesco Paolo Ragusa - Web Developer, IT Consultant e Studente di Informatica",
  keywords: "web developer, IT consultant, informatica, portfolio, Francesco Paolo Ragusa, modern design",
  openGraph: {
    title: "Francesco Paolo Ragusa - Web Developer & IT Consultant",
    description: "Portfolio moderno di Francesco Paolo Ragusa - Web Developer, IT Consultant e Studente di Informatica",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesco Paolo Ragusa - Web Developer & IT Consultant",
    description: "Portfolio moderno di Francesco Paolo Ragusa",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
          <ChatWidget />
        </ErrorBoundary>
      </body>
    </html>
  );
}
