import '../globals.css';

export const metadata = {
  title: "Mercure Hotel Restaurant – CODE 8 Lounge Design & Concept Creation Dubai",
  description:
    "Discover CODE 8 Lounge, a full concept creation project at the Mercure Hotel Restaurant in Dubai by DICE Hospitality. Contact Us.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/mercure-hotel-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
