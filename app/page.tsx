"use client"
// import Image from "next/image";
// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import Greet from "./components/Greet";
import { supabase } from '@/lib/supabase' 
import { useState } from 'react'

export default function Home() {
  // const setNewView = async () => {
  //   const {data, error} = await supabase
  //     .from("views")
  //     .insert({
  //       name: 'random name'
  //     })

  //     if (data) console.log(data)
  //     if (error) console.log(error)
  // };

  // setNewView();

  const [data, setData] =  useState<{
    email: string,
    password: string,
  }>({
     email: '',
     password: '',
  })

  const login = async () => {
    try {
      
      let { data, error } = await supabase.auth.signInWithPassword({
        email: 'someone@email.com',
        password: 'sZWMrufZWtqqxWAwMYkX'
      })
    
      if (data) console.log(data)

    } catch (error) {
      console.log(error)
  }}

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <main>
      <div>
        <div className='grid'>
          <label>Email</label>
          <input type="text" name='email' value={data?.email} onChange={handleChange} />
        </div>
        <div className='grid'>
          <label>Password</label>
          <input type="password" name='password' value={data?.password} onChange={handleChange} />
        </div>
        <div>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </main>
  );
}
