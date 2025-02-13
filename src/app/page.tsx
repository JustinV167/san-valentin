"use client"
import DialogModal from "./components/DialogModal";
import { useEffect, useState } from "react";
import CorazonesCayendo from "./components/hearthsRain";
import CheckLight from "./components/checkLight";
import AcceptView from "./components/acceptView";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const textToDisplay = "¿Soy yo o esto está como muy oscuro? Por favor enciende la Luz, dale toca el boton para encenderla.";
  const [sansTalking] = useState(() => new Audio("/sansTalking.mp3"));
  const [megalovania] = useState(() => new Audio("/megalovania.mp3"));
  const [kirbyOst] = useState(() => new Audio("/kirbyOst.mp3"));
  const [showText, setShowText] = useState(true)
  const [score, setScore] = useState(0)



  useEffect(() => {
    if (isOpen) {
      if (textToDisplay.length != displayText.length) {
        sansTalking.loop = true;
        sansTalking.play()
        setTimeout(() => {
          setDisplayText(displayText + textToDisplay[displayText.length])
        }, 100)
      } else {
        sansTalking.pause()
        megalovania.loop = true;
        megalovania.play()
      }
    }
  }, [isOpen, displayText]);
  return (
    <div className="bg-rose-300 w-screen h-screen">

      {showText && <div onClick={() => {
        if (!isOpen) {
          setIsOpen(true)
        }

      }} className="fixed z-10 w-screen h-screen bg-black/70 flex justify-center pt-20 ">
        {!isOpen && <p className="text-2xl text-white">Has click aqui</p>}
        {isOpen && <div className="pr-10" >
          <DialogModal width="w-1/2" text={displayText}
            chopTailColor={isOpen ? "bg-[#4b3134]" : "white"}></DialogModal>
          <div className="absolute top-[70vh]">
            <CheckLight disabled={textToDisplay.length != displayText.length} onClick={() => {
              setTimeout(() => {
                if (textToDisplay.length != displayText.length) {
                  return
                }
                megalovania.pause()
                kirbyOst.loop = true;
                kirbyOst.play()
                setShowText(false)
              }, 600)
            }}></CheckLight>
          </div>
        </div>}
      </div>}
      {!showText && <>
        <p className="fixed top-0 left-0">Puntuación:{score}</p>
        <CorazonesCayendo clickHearth={() => { setScore(score + 1) }} />
        <AcceptView></AcceptView>
        <div className="fixed z-0 -bottom-10 w-screen flex justify-center items-center mt-10">
          <Image className="mx-auto w-[80vw] h-[90vw]" src="/animatedHearth.svg" alt="" width={64} height={64} />
        </div>
      </>}
    </div>

  );
}
