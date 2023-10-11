import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/Components/AuthProvider/Authprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Using NEXT",
  description: "this is My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />

              {children}
              <Footer />
            </div>{" "}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
