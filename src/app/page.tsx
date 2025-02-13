"use client"
import DialogModal from "./components/DialogModal";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const textToDisplay = "Bienvenido a nuestra aventura épica.";
  const [sansTalking] = useState(() => new Audio("/sansTalking.mp3"));
  const [megalovania] = useState(() => new Audio("/megalovania.mp3"));
  const [kirbyOst] = useState(() => new Audio("/kirbyOst.mp3"));
  const [showText,setShowTest]=useState(true)

  
  useEffect(() => {
    if (isOpen) {
      if (textToDisplay.length != displayText.length) {
        sansTalking.loop = true;
        sansTalking.play()
        setTimeout(() => {
          setDisplayText(displayText + textToDisplay[displayText.length])
        }, 100)
      }else{
        sansTalking.pause()
        megalovania.loop = true;
        megalovania.play()
      }
    }
  }, [isOpen, displayText]);
  return (
    <div className="bg-rose-300 w-screen h-screen">
       {showText && <div onClick={()=>{
        if(!isOpen){
          setIsOpen(true)
        }
        if(textToDisplay.length != displayText.length){
          return 
        }
        megalovania.pause()
        kirbyOst.loop = true;
        kirbyOst.play()
        setShowTest(false)
        }} className="fixed w-screen h-screen bg-black/70 flex justify-center pt-20 ">
          {!isOpen && <p className="text-2xl text-white">Has click aqui</p>}
       {isOpen && <div className="pr-10" >
        <DialogModal width="w-1/2" text={displayText}
        chopTailColor={isOpen?"bg-[#4b3134]":"white"}></DialogModal>
        </div>}
      </div>}
    </div>

  );
}
