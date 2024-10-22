import React from 'react'
import Navbar from './components/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'


export default function page() {
  return (
    <div className='h-screen w-screen relative overflow-x-hidden'>
    <Navbar/>

    <div className='w-full h-[80vh] md:h-[40vh] text-center mt-10 text-g flex flex-col font-mono justify-center items-center'>
    <h1 className='text-4xl font-extrabold z-10 bg-gradient-to-r from-[#fc53f3] to-[#5c24fe] bg-clip-text text-transparent'>AN EXPERIMENTAL IMPLEMENTATION</h1>
    <h2 className='text-3xl font-bold z-10'>HABLE AI.</h2>
    <p className='font-kablammo text-xl mt-3 z-10 tracking-wider' >This is an experimental implementation of vercel&apos;s AI SDK.</p>
    </div>

    <Image src={"/bg-bot.png"} alt={'bg-bot'} width={500} height={500} className='w-screen md:w-[80vw]  absolute bottom-0 md:left-[12%]'/>

<div className='z-20 p-1 flex justify-center items-center md:-mt-10 '>
    <Link href={"/chat-ai"} className='z-20'><button  className=' z-20 py-2 px-4 text-2xl font-bold rounded-3xl bg-gradient-to-r from-[#fc53f3] to-[#5c24fe] hover:border-[2px] hover:border-blue-700 '>GET STARTED</button></Link>
</div>
    
    </div>
  )
}
