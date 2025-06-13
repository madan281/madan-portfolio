import { useEffect, useState, useMemo } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

export default function SecureIntro({ onComplete }) {
  const [displayText, setDisplayText] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const steps = useMemo(() => [
    "[•] Establishing secure connection...",
    "[✓] Authentication verified.",
    "Unlock me",
  ], []);


  useEffect(() => {
    if (stepIndex >= steps.length) return;

    if (charIndex < steps[stepIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + steps[stepIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const nextStepDelay = setTimeout(() => {
        setStepIndex((prev) => prev + 1);
        setCharIndex(0);
        setDisplayText("");
      }, 1000);
      return () => clearTimeout(nextStepDelay);
    }
  }, [charIndex, stepIndex, steps]); // ✅ fixed: added 'steps'

  const handleUnlock = () => {
    setUnlocked(true);
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  const isGlitchText = displayText.includes("[✓]");

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center font-mono">
      {/* Optional background effect layer */}
      <div className="absolute inset-0 z-0 opacity-30 animate-matrix bg-black pointer-events-none" />

      {/* Typing Text */}
      <div className="z-10 text-green-400 text-center text-xl sm:text-2xl tracking-wider mb-6 px-4">
        {!unlocked ? (
          <span className={isGlitchText ? "glitch-text" : ""}>{displayText}</span>
        ) : (
          "[🔓] Access granted. Welcome!"
        )}
      </div>

      {/* Lock Button */}
      <div className="z-10">
        {stepIndex === steps.length && !unlocked && (
          <button
            onClick={handleUnlock}
            className="text-green-300 border-2 border-green-400 p-4 rounded-full hover:bg-green-600 transition text-3xl glitch-lock"
          >
            <FaLock />
          </button>
        )}
        {unlocked && <FaUnlock className="text-green-400 text-4xl animate-bounce" />}
      </div>
    </div>
  );
}
