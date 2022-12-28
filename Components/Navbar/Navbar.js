import { signOut, useSession } from "next-auth/react";
import CredentialsProvider from "next-auth/providers/credentials";

import Link from "next/link";

const Navbar = () => {
   const {data:session}=useSession()
    const menuItems = <>
        <li><Link href="/addblog">Add Blog</Link></li>
      
        <li><Link href="/myblog">My Blog</Link></li>
        {session?.user.email ?<li><Link onClick={()=>signOut()} href="/login">Logout</Link></li>
        :  <li><Link href="/login">Login</Link></li>
        }
      
    </>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {menuItems}
                     
                    </ul>
                </div>
                <Link  href="/" className="btn btn-ghost normal-case text-xl">Traveling Blog</Link>
                <p className="text-red">{session?.user.email}</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
          
        </div>
    );
};

export default Navbar;