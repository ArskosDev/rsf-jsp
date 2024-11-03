import type { Metadata } from "next";
import "./globals.css";
import UserProvider from "./context/user";
//import AuthOverlay from "./components/AuthOverlay";
import AllOverlays from "./components/AllOverlays";



export const metadata: Metadata = {
  title: "The Real South Face",
  description: "Application de gestion des evenements",
};

export default function RootLayout({children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <UserProvider>

      <body > 
        <AllOverlays />
        {children}
        
      </body>
        
      </UserProvider>
      
    </html>
  );
}
