import "./globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { siteConfig } from "@/config/site";
import { NavbarAction } from "@/components/NavbarActions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Provider from "@/app/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <header className="container z-40 bg-background -mb-10">
            <div className="flex h-20 items-center justify-between py-6">
              <MainNav items={siteConfig.mainNav} />
              <nav className="flex align-middle"></nav>
              <NavbarAction />
            </div>
          </header>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
