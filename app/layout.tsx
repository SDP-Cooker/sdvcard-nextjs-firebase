import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  icons: "/logo.png",
  title: "Sen Digital Vcard",
  description:
    "Découvrez nos cartes de visite intelligentes qui intègrent la simplicité du QR code et la puissance de la technologie NFC pour une connexion instantanée.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
