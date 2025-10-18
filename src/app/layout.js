import "./globals.css";

export const metadata = {
  title: "Mo",
  description: "This blog is for learning programming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
