/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase-config";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
        window.location.replace("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    // <div>

    //   <form >
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    //   {error && <p>{error}</p>}
    // </div>
    <div className="flex min-h-screen w-full">
      <div className="flex w-full shrink-0 items-center lg:w-1/3">
        <div className="relative flex h-full w-full flex-col justify-center pt-10 font-mono text-[#3f3d56]">
          <p className="text-center font-bold text-lg mb-10">
            Welcome to Flora Verse
          </p>
          <form
            onSubmit={handleLogin}
            className="mx-auto w-full max-w-lg  px-4"
          >
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b py-1 font-bold focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b py-1 font-bold focus:outline-none"
              />
            </div>
            <p className="text-right mt-2 text-xs capitalize">
              forget password ?
            </p>
            <div className="mx-auto mt-10 w-full max-w-sm">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#72da72] px-4 py-2 font-semibold text-white"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="relative flex justify-center mt-7 max-w-lg mx-auto w-full border">
            <div className="rounded-full w-6 h-6 flex justify-center items-center absolute bg-gray-100 -top-[11px] mx-auto text-xs">
              OR
            </div>
          </div>
          <p className="text-center text-xs mt-5">
            New User? <span className="text-green-500">Create Account</span>
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/life-of-plants.appspot.com/o/%E2%80%94Pngtree%E2%80%94small%20leaf%20hanging%20green%20plant_5768251.png?alt=media&token=02663f6c-4820-4396-9159-fa6784ae4318"
            alt="plant"
            className="absolute -left-10 top-0 h-40"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/life-of-plants.appspot.com/o/8367582w.webp?alt=media&token=31a0fe31-cff8-461a-b724-a72e58610788"
            alt="bottom"
            className="w-52 absolute right-0 bottom-0"
          />
        </div>
      </div>
      <div className="lg:flex hidden w-full items-center justify-center bg-blue-100 bg-opacity-50 p-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/life-of-plants.appspot.com/o/image-from-rawpixel-id-12701460-png.png?alt=media&token=d8d8fe63-2609-4ead-8486-eb9a2cce35dc"
          alt="d"
          className="w-56"
        />
      </div>
    </div>
  );
}

export default Login;
