import { useEffect, useState } from "react";

export function useTypingEffect(words, typeSpeed = 140, pauseTime = 1000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const word = words[wordIdx];
    
    if (!isDeleting && displayText.length < word.length) {
      // Typing forwards
      timer = setTimeout(
        () => setDisplayText(word.slice(0, displayText.length + 1)),
        typeSpeed
      );
    } else if (isDeleting && displayText.length > 0) {
      // Deleting backwards
      timer = setTimeout(
        () => setDisplayText(word.slice(0, displayText.length - 1)),
        typeSpeed / 2
      );
    } else if (displayText.length === word.length && !isDeleting) {
      // Pause when fully typed
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (displayText.length === 0 && isDeleting) {
      // Move to next word after deleting
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIdx((wordIdx + 1) % words.length);
      }, 300);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIdx, words, typeSpeed, pauseTime]);

  return displayText;
}
