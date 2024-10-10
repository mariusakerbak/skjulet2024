import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bli med på reisen gjennom historiene fra sofaen!",
  description: "Skjulet presenterer en interaktiv reiseopplevelse gjennom landene og hendelsene fra plata Historier fra Sofaen.",
}

export default function Story({ children }) {
  return (
    <html lang="nb">
      <body className="bg-black">
            {children}
      </body>
    </html>
  )
}