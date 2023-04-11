import React from 'react'
import Link from "next/link";
interface NavbarProps{}

const Navbar:React.FC<NavbarProps>=() =>{
return <header className={'w-full flex justify-between px-10 py-5 bg-black text-white'}>
  {/*Left Side*/}
  <div>
    Resturant
  </div>

  {/*Right Side*/}
  <div className={'flex gap-x-2'}>
    <Link href={'/login'}>Login</Link>
    <Link href={'/signup'}>Sign Up</Link>
  </div>
</header>
}

export default  Navbar