import "./styles/globals.css";

export const metadata = {
  title: "Eva's Development Space",
  description:
    "Here is Eva's personal website, showcasing her self-made projects along with a few stories about herself.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center bg-slate-50">
          {children}
        </main>
      </body>
    </html>
  );
}
