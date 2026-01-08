import '../globals.css';

export const metadata = {
  title: "Business Bay Restaurant Concept Development | NURAI Cafe – Dice ",
  description:
    "Expert Business Bay Restaurant concept development by Dice Hospitality for NURAI Cafe. Get Hospitality consulting and café concept design in Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
