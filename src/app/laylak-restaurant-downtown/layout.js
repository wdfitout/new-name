import '../globals.css';

export const metadata = {
  title: "Laylak Restaurant Downtown Full Concept Creation by Dice Hospitality",
  description:
    "Dice Hospitality provided full concept creation for Laylak Restaurant Downtown Toronto, delivering expert restaurant hospitality services. Contact Us.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/laylak-restaurant-downtown',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
