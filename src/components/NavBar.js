import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

        <span className={`
        h-[1.5px] inline-block bg-primary
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'} 
        `}
        >&nbsp;</span> 
        </Link>
    )
};

const NavBar = () => {
    const router = useRouter();
    const [user, setUser] = useState();

    useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        setUser(storedUser ? JSON.parse(storedUser) : null);
    }
    }, []);
    

    return (
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-center text-dark'
        >
            <nav className='flex items-center justify-center'>
                <p className='mr-4'>Bumi</p>
                <p>Kita,</p>
                <CustomLink href="/" title="Rumah" className='mx-4'/>
                <p>Kita</p>
            </nav>
        </header>
    )
}

export default NavBar