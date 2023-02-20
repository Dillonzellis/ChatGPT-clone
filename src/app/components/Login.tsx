"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-chatGreen-400">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="Logo"
      />
      <button
        onClick={() => signIn("google")}
        className="animate-pulse text-3xl font-bold text-white"
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
