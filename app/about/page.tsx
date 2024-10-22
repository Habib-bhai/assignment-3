import Image from "next/image";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function About() {
  return (
    <>
    <Navbar/>
     <div className="w-screen h-screen  overflow-x-hidden flex flex-col  justify-center items-center ">
        <Image src={"/sdk-ai-img.jpeg"} className="rounded-2xl mt-20 mb-3 border-[2px] border-[#5c24fe]" alt="sdk-ai-img" width={500} height={500}/>
         <p className="px-10 mb-16">Vercel&apos;s AI SDK simplifies integrating AI into your web applications. Start by installing the package (`npm install ai`) and importing the necessary components. The SDK provides pre-built hooks like `useChat` for seamless interaction with large language models. You can easily configure parameters like model, temperature, and streaming for customized responses.  The SDK handles API calls and data management, allowing you to focus on building user interfaces and logic. With Vercel&apos;s edge network, your AI-powered features benefit from low latency and global availability, delivering a smooth and responsive user experience.</p>   
     </div>

    <Footer/>
    </>
  )
}
