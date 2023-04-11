"use client"
import React from 'react'
import {useForm} from 'react-hook-form'
import LoginForm from "@/app/login/components/LoginForm";
interface pageProps{}

const page:React.FC<pageProps>=() =>{


return <div className={'h-screen w-full flex flex-col gap-y-3 items-center justify-center'}>
  <h1>Login</h1>
  <LoginForm/>
</div>
}

export default page