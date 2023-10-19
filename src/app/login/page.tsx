"use client";

import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
  });

  const onLogin=() => {
    
  }
  
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <h1 className="text-6xl mb-16">Login</h1>
      <label htmlFor="userEmail" className="text-2xl">
        Email
      </label>
      <input
        type="text"
        value={user.userEmail}
        onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
        placeholder="email"
        className="p-2 rounded-md text-black"
      />
      <label htmlFor="userName" className="text-2xl">
        Password
      </label>
      <input
        type="password"
        value={user.userPassword}
        onChange={(e) => setUser({ ...user, userPassword: e.target.value })}
        placeholder="password"
        className="p-2 rounded-md text-black"
      />

      <button className="my-4 px-5 py-1 bg-slate-400 rounded-lg text-black" onClick={onLogin}>Login</button>

      <p className="text-xs mt-2">Create an Account </p>
      <Link href="/signup" className="text-blue-500">
        signup
      </Link>
    </div>
  );
};

export default LoginPage;
