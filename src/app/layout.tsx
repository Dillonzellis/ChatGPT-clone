import SideBar from "./components/SideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="flex">
          <div className="h-screen max-w-xs overflow-y-auto bg-chatGrey-700 md:min-w-[20rem]">
            <SideBar />
          </div>

          {/* ClientProvider - Notification */}

          <div className="flex-1 bg-chatGrey-400">{children}</div>
        </div>
      </body>
    </html>
  );
}
