import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/layout/header";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "auto",
  preload: true,
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Meowgle",
  description:
    "Discover Meowgle, the purr-fect search engine for cat lovers! With a user-friendly interface and cat-centric results, finding information on cats has never been more delightful.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="dark:bg-google-dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
