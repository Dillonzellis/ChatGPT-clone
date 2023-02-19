import React from "react";
import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* ModelSelection */}</div>

          {/* Map through the ChatsRows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
