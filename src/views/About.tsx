import { useEffect, useRef, useState } from "react";
import Resume from "./Resume.tsx";

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    if (!textRef || !textRef.current) {
      return;
    }

    try {
      await navigator.clipboard.writeText(
        textRef.current.textContent ? textRef.current.textContent : ""
      );
      setCopied(true);
    } catch (err) {
      return;
    }
    return;
  };

  useEffect(() => {
    let timerId: number | null = null;
    if (!hover) {
      timerId = setTimeout(() => {
        setCopied(false);
      }, 500);
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [hover]);

  return (
    <div className="">
      <h1 className="alpino-700 text-5xl text-foregroundLight dark:text-foregroundDark transition-color duration-1000">
        Hi, I'm <span className="text-sky">Anup Bhoos</span>! 🤟
      </h1>
      <h2 className="alpino-400 text-3xl mt-3 text-foregroundLight dark:text-foregroundDark transition-color duration-1000">
        Small-town lad, <br />
        curious about most things
      </h2>
      <h3 className="text-backgroundDark dark:text-foregroundDark alpino-700 text-[22px] mt-8 transition-color duration-1000">
        Short bio
      </h3>
      <p className="text-foregroundLight dark:text-paraDark transition-color duration-1000">
        My name is Anup Bhoos. I am an Indian living in Maharashtra. I was born
        in a small town and have lived in towns across India, which has given me
        a diverse perspective on life and work.
        <br />
        <br /> I’ve always had a passion for problem-solving and building things
        that work seamlessly. As a full stack developer and machine learning
        engineer, I focus on creating both the front-end experiences and the
        back-end systems that power them. But my true passion extends beyond
        coding—I'm also deeply into reading novels and anthropology, gaming both
        esports and in real life, and exploring new lands, especially through
        trekking. These hobbies inspire my creativity and curiosity, influencing
        how I approach tech and blending technical skills with a broad range of
        interests.
      </p>

      <Resume />
      <div className="mt-10">
        <h2 className="text-backgroundDark dark:text-foregroundDark alpino-700 text-[22px] mt-8 transition-color duration-1000">
          Say hello!
        </h2>
        <p className="text-foregroundLight dark:text-paraDark transition-color duration-1000">
          Got an idea, looking to collaborate, or just want to chat? Feel free
          to reach out!
          <br />
        </p>
        <p className="text-foregroundLight dark:text-paraDark mt-4 transition-color duration-1000">
          For the quickest replies
        </p>
        <div className="text-darkButton flex gap-x-4 items-center">
          <p
            ref={textRef}
            className="text-foregroundLight dark:text-darkButton transition-color duration-1000"
          >
            anup.bhoos2003@gmail.com
          </p>
          <button
            className="bg-sky px-2 py-1 rounded-lg hover:bg-[#0284C7] transition-colors duration-300"
            onClick={copyText}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {copied ? "Done!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
