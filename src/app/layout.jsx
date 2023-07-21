'use client';
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { SnackbarProvider } from "notistack";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MaiStudyPal AI",
  description: "Chatgpt AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={3000}
        >
          {children}
        </SnackbarProvider>
      </body>
    </html>
  );
}
