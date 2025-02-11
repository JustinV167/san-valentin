"use client"
import DialogModal from "./components/DialogModal";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const textToDisplay = "Bienvenido a nuestra aventura épica.";
  const playSound = () => {
    const audio = new Audio("/letter-sound.mp3"); // Ruta del sonido
    audio.volume = 0.1; // Volumen ajustado
    audio.play();
  };
  useEffect(() => {
    if (isOpen) {
      if (textToDisplay.length != displayText.length) {

        setTimeout(() => {
          setDisplayText(displayText + textToDisplay[textToDisplay.indexOf(displayText) + 1])
        }, 100)
      }
      // Velocidad de aparición de las letras
    }
  }, [isOpen, displayText]);
  return (
    <div>

      <div className="fixed w-screen h-screen ">
        <DialogModal text={displayText}></DialogModal>
      </div>
    </div>

  );
}
