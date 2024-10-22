import Chat from "../components/chat/Chat"
import Navbar from "../components/navbar/Navbar"
import Image from "next/image"

function ChatAi() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
        <Navbar/>
         <Chat/>   
         <Image src={"/LooperBG.png"} alt={"bg"} height={200} width={200} className="w-screen absolute bottom-0"/>
    </div>
  )
}

export default ChatAi