"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async () => {
    setMessage("");
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("✅ Check your email for the confirmation link!");
    }
  };

  return (
    <div className="flex flex-col w-[400px] mx-auto mt-20">
      <h1 className="text-xl mb-4">Sign Up</h1>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 mb-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border p-2 mb-2"
      />
      {message && <p className="text-blue-600 mb-2">{message}</p>}
      <button
        onClick={handleSignup}
        className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Sign Up
      </button>
    </div>
  );
}
