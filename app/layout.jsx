import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Bear Team Real Estate | Orlando, FL",
  description:
    "Boutique Orlando brokerage with progressive commission splits, zero monthly fees, and real support. Buy, sell, or build your real estate career with Bear Team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
