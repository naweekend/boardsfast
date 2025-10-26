import { Gabarito, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ["latin"],
});

const notoUrdu = Noto_Nastaliq_Urdu({
  variable: "--font-noto-urdu",
  subsets: ["arabic"],
});

export const metadata = {
  title: "BoardsFast",
  description: "Boards XII Class Syllabus Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} ${notoUrdu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
