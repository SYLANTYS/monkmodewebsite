import "./globals.css";

export const metadata = {
  title: "MonkMode",
  description: "Canvas-first offline LLM workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
