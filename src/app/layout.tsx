import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { DevtoolsProvider } from "@/providers/DevtoolsProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan | Software developer",
  description: "This is aryan's portfolio",
  icons: {
    icon: "/logo.svg",
  },

  openGraph: {
    title: "Aryan | Software developer",
    description: "This is aryan's portfolio",
    url: "https://talktome.com",
    siteName: "Aryan | Software developer",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aryan | Software developer",
    description: "This is aryan's portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AuthProvider> */}
          <DevtoolsProvider>{children}</DevtoolsProvider>
          {/* </AuthProvider> */}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
