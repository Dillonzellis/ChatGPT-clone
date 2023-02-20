import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Login from "./components/Login";
import { SessionProvider } from "./components/SessionProvider";
import SideBar from "./components/SideBar";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="h-screen max-w-xs overflow-y-auto bg-chatGrey-700 md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* ClientProvider - Notification */}

              <div className="flex-1 bg-chatGrey-400">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
