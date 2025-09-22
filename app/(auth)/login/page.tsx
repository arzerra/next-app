"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const login = async () => {
    setError(""); // clear error first
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    // ✅ Only allow this email
    if (form.email === "admin@dentalclinic.com") {
      router.push("/admin"); // redirect to admin dashboard
    } else {
      setError("Unauthorized: Only admin can login.");
      await supabase.auth.signOut(); // logout immediately
    }
  };

  return (
    <div className="flex flex-col w-[400px] mx-auto mt-20">
      <h1 className="text-xl mb-4">Admin Login</h1>
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
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        onClick={login}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}
