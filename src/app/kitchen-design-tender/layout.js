import '../globals.css';

export const metadata = {
  title: "Concept Development Menu Design | Dice Hospitalty Dubai",
  description:
    "Concept Development Menu Design by Dice Hospitalty Dubai",
  metadataBase: new URL('https://dicehospitality.ae/'),
  alternates: {
    canonical: '/concept-development-menu-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
  }
