"use client"
import React from 'react'
import { useForm } from "react-hook-form";
interface LoginFormProps{}

const LoginForm:React.FC<LoginFormProps>=() =>{
  const {formState,handleSubmit,register,getValues}=useForm<{email:string,password:string}>()
  const onSubmit=()=>{
    const {email,password}=getValues()
    console.log(getValues());
  }
return <form className={'bg-purple-950 flex flex-col gap-y-3 p-10 min-w-[350px] rounded-md text-white'} onSubmit={handleSubmit(onSubmit)} >
  <div className={'flex flex-col'}>
    <label htmlFor={'email'}>Email</label>
    <input className={'border focus:outline-none py-1 rounded text-slate-800'} id={'email'} {...register("email")} type="text" name={'email'} />
  </div>
  <div className={'flex flex-col'}>
    <label htmlFor="password">Password</label>
    {formState.errors.password?<p className={'text-red-500'}>{formState.errors.password.message}</p>:null}
    <input className={'border focus:outline-none py-1 rounded text-slate-800'} {...register('password',{required:true})} type="text" name={'password'} id={'password'} />
  </div>
  <button>Login</button>
</form>
}
export default LoginForm