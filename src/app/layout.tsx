import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "800", "900", "1000"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Country Details",
  description: "Website gives country details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
