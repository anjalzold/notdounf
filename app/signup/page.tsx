"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e: any, fieldName: any) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const { email, username, password } = form;
      const user = { email, username, password };
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.status === 201) {
        router.push("/login");
        // User successfully created, handle success (e.g., redirect)
      } else {
        // Handle errors, show an error message, etc.
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='max-w-[400px] mx-auto bg-white px-4 py-3 mt-10 text-center'>
      <p className='text-2xl mx-auto mt-[50px]'>Sign up to Anilist</p>
      <form
        className='flex flex-col gap-[30px] mt-5 py-4 px-5 text-base mb-[30px]'
        onSubmit={handleSubmit}
      >
        <input
          className='px-4 py-3 border-none bg-[#EDF1F5]'
          type='email'
          name='email'
          id=''
          placeholder='Email'
          value={form.email}
          onChange={e => handleChange(e, "email")}
        />
        <input
          type='text'
          className='px-4 py-3 border-none bg-[#EDF1F5]'
          name='username'
          id=''
          placeholder='userName'
          value={form.username}
          onChange={e => handleChange(e, "username")}
        />
        <input
          type='password'
          className='px-4 py-3 border-none bg-[#EDF1F5]'
          name='password'
          id=''
          placeholder='password'
          value={form.password}
          onChange={e => handleChange(e, "password")}
        />
        <input
          type='password'
          className='px-4 py-3 border-none bg-[#EDF1F5]'
          name='repeatPassword'
          id=''
          placeholder='repeat password'
          value={form.repeatPassword}
          onChange={e => handleChange(e, "repeatPassword")}
        />
        <div className='flex gap-x-4'>
          <input type='checkbox' id='agree' />
          <label htmlFor='agree'>I agree to all terms and condition</label>
        </div>
        <button type='submit'>Submit</button>
      </form>

      <div className='mb-10'>
        <Link href='/login' className='pr-5'>
          Login
        </Link>
        <Link href='/login'>Resend Verification Email</Link>
      </div>
    </div>
  );
}
