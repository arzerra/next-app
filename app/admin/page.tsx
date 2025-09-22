"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import LogoutButton from "../components/LogoutButton";

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user || user.email !== "admin@dentalclinic.com") {
        router.push("/login");
      } else {
        setUser(user);
      }
    };

    checkUser();
  }, [router]);

  return (
    <>
    <div>
      {user ? (
        <h1>Welcome Admin: {user.email}</h1>
      ) : (
        <p>Checking permissions...</p>
      )}
    </div>
    <LogoutButton />
    </>
  );
}
