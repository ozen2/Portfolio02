import "./globals.css";

export const metadata = {
  title: "Yume web portfolio",
  description: "Mon portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
