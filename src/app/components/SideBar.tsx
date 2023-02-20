"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* ModelSelection */}</div>

          {/* Map through the ChatsRows */}
        </div>
      </div>

      {session && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="profile picture"
          className="hover mx-auto mb-2 h-12 w-12 cursor-pointer rounded-full hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
