import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./layoutClient";
import { AppProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RodrigoCW",
  description: "Criado por RodrigoCW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/*<RootLayoutClient>*/}
        <AppProvider>
          {children}
        </AppProvider>
        {/*</RootLayoutClient>*/}
      </body>
    </html>
  );
}
