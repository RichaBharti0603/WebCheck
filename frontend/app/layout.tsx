
import "../styles/globals.css";

export const metadata = {
  title: "WebCheck - Monitor Your Website",
  description: "Easily track your website's uptime and performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

