import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 
        font-medium text-lg dark:text-light
        '>
            <Layout className='py-4 flex items-center justify-center'>
                <span>{new Date().getFullYear()} &copy; Jaga 🌏 kita dengan ❤️</span>
            </Layout>
        </footer>
    )
}

export default Footer