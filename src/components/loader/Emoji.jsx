import { useEffect, useState } from "react";

const emojis = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

export function Emoji() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index + 1 < emojis.length) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 150);
    return () => clearInterval(intervalId);
  }, [index]);

  return <div>{emojis[index]}</div>;
}
