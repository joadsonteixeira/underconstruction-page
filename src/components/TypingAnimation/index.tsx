"use client";

import { useEffect, useState } from "react";
import styles from "./TypingAnimation.module.css"; // Crie um arquivo CSS separado para suas classes de estilo

interface TypingAnimationProps {
  textContent: string;
  delay?: number;
  intervalTime?: number;
  showCursor?:boolean
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  textContent,
  delay = 0,
  intervalTime = 100,
  showCursor = true
}) => {
  const text = textContent;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      let prevText = "";
      const intervalId = setInterval(() => {
        if (text[currentIndex] === "\n") {
          prevText = prevText + "<br>";
        } else {
          prevText = prevText + text[currentIndex];
        }

        setDisplayedText(prevText);
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(intervalId);
        }
      }, intervalTime); // Ajuste a velocidade da animação conforme necessário

      return () => clearInterval(intervalId);
    }, delay);
  }, [textContent, delay]);

  return (
    <div
      className={styles.typingAnimation}
      dangerouslySetInnerHTML={{ __html: displayedText }} // Use dangerouslySetInnerHTML para renderizar HTML
    ></div>
  );
};

export default TypingAnimation;
