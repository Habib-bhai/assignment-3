import Link from "next/link"

function Navbar() {
  return (
    <div className=" z-40 w-full sticky top-6 flex justify-between px-4 md:px-0 md:justify-evenly items-center">
      <Link href={"/"} className="hover:border-b-4 hover:border-[#5c24fe]"><h1 className="font-kablammo text-3xl font-bold">HABLE AI</h1></Link>
      <div >
        <ul className="text-xl font-semibold flex justify-center gap-8 font-poppins items-center"> 
          <Link href={"/chat-ai"} className="hover:bg-gradient-to-r from-[#fc53f3] to-[#5c24fe] hover:rounded-full"><li>AI</li></Link>

          <Link href={"/about"} className="hover:bg-gradient-to-r from-[#fc53f3] to-[#5c24fe] hover:rounded-full"><li>About</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar