"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'


const NavBar = () => {
    const pathName = usePathname()
    const links = [
        { linkText: "Dashboard", href: "/" },
        { linkText: "Issues", href: "/issues" }
    ]

    return (
        <nav className='flex px-6 space-x-6 items-center py-6 text-xl border-b-2' >
            <Link href="/" ><AiFillBug size={25} /></Link>
            <ul className=' flex space-x-6'>
                {links.map((link) => (
                    <Link key={link.href} href={link.href}
                        className={`${link.href === pathName ? " text-zinc-900" : "text-zinc-500"} hover:text-zinc-900 text-xl transition-all`} >
                        {link.linkText}
                    </Link>


                ))}
            </ul>

        </nav >
    )
}

export default NavBar