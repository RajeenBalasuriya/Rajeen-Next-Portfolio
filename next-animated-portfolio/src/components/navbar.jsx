'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const links=[
    {url:"/",title:"Home"},
    {url:"/about",title:"About"},
    {url:"/projects",title:"Projects"},
    {url:"/contact",title:"Contact"}
]

const NavBar=()=>{
    const [menuOpen,setMenuOpen]=useState(false);
    return(
        <div className='h-full flex items-center justify-between text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 '>
             <div className='hidden md:flex gap-4 text-white'>
             {links.map(link=>(
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
            </div>


            {/* LOGO */}
            <div className='md:hidden lg:flex w-1/3 justify-center'>
                <Link href="/" className="txt-sm bg-grey-to-purple rounded-md p-1 font-semibold flex items-center justify-center">
                  <span className='text-white font-thin mr-2'>Rajeen</span>
                  <span className='w-12 h- rounded bg-white text-black flex  items-center justify-center'>.DEV</span>
                </Link>
            </div>

            <div className="hidden md:flex gap-4 w-1/3 justify-center">
                <Link href='#'>
                    <Image src="/github-mark-white.svg" alt="logo" width={24} height={24}/>

                </Link>
                <Link href="#">
                
                    <Image src="/icons8-linkedin.svg" alt="logo" width={24} height={24}/>
                    
                </Link>
                <Link href="#">
                
                <Image src="/medium-white-icon.svg" alt="logo" width={24} height={24}/>
                
            </Link>
            </div>
            {/* Responsive MENU */}
            <div className='md:hidden'>
                {/*MENU Button*/}
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative ' onClick={()=>{setMenuOpen(!menuOpen)}}>
                    <div className="w-10 h-1 bg-grey-to-purple rounded"></div>
                    <div className="w-10 h-1 bg-grey-to-purple rounded"></div>
                    <div className="w-10 h-1 bg-grey-to-purple rounded"></div>
                </button>
                {/* Menu list */}
                {
                    menuOpen &&(
                        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                        {links.map(link=>(
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
                    </div>
                    )
                }
               
            </div>
        </div>

    )
}

export default NavBar;