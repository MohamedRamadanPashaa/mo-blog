import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";

export const metadata = {
  title: "Mo",
  description: "This blog is for learning programming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <NavBar />

        <main className="main">{children}</main>
      </body>
    </html>
  );
}
