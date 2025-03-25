import type { Metadata } from "next";
import {  Rubik } from "next/font/google";
import "./globals.css";
import { domAnimation, LazyMotion } from "framer-motion";
import InnerLayout from "@/components/InnerLayout";



const rubik = Rubik({

  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Inesa ArtSchool",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <body
        className={`${rubik.className}  antialiased`}
      >
        <LazyMotion features={domAnimation}>
            <InnerLayout>{children}</InnerLayout>
          </LazyMotion>
      </body>
    </html>
  );
}
