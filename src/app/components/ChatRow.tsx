import {
  ChatBubbleLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(
      db,
      "users",
      session?.user?.email!,
      "chats",
      id,
      "messages"
    )
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname, id]);

  const removeChat = async () => {
    await deleteDoc(
      doc(db, "users", session?.user?.email!, "chats", id)
    );
    router.replace("/");
  };

  return (
    <div>
      <Link
        href={`/chat/${id}`}
        className={`chatRow justify-center ${
          active && "bg-gray-700/50"
        }`}
      >
        <ChatBubbleLeftIcon className="h-5 w-5" />
        <p className="hideen flex-1 truncate md:inline-flex">
          {messages?.docs[messages?.docs.length - 1]?.data().text ||
            "New Chat"}
        </p>
        <TrashIcon
          onClick={removeChat}
          className="h-5 w-5 text-gray-500 hover:text-red-700"
        />
      </Link>
    </div>
  );
}

export default ChatRow;
