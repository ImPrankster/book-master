import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Book Master",
  description: "A place for all your books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="bumblebee" lang="en">
      <head>
        <title>Book Master</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
