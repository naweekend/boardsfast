"use client";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const syllabus = {
    Mathematics: [
      { id: 1, name: "Linear Algebra", completed: true },
      { id: 2, name: "Calculus", completed: false },
      { id: 3, name: "Differential Equations", completed: false },
      { id: 4, name: "Probability and Statistics", completed: false },
      { id: 5, name: "Discrete Mathematics", completed: false },
      { id: 6, name: "Number Theory", completed: false },
      { id: 7, name: "Algebra", completed: false },
      { id: 8, name: "Geometry", completed: false },
      { id: 9, name: "Trigonometry", completed: false },
      { id: 10, name: "Calculus on Manifolds", completed: false },
    ],
    Physics: [
      { id: 1, name: "Mechanics", completed: false },
      { id: 2, name: "Thermodynamics", completed: false },
      { id: 3, name: "Electromagnetism", completed: false },
      { id: 4, name: "Optics", completed: false },
      { id: 5, name: "Modern Physics", completed: false },
      { id: 6, name: "Waves and Oscillations", completed: false },
      { id: 7, name: "Nuclear Physics", completed: false },
    ],
    Chemistry: [
      { id: 1, name: "Atomic Structure", completed: false },
      { id: 2, name: "Periodic Table", completed: false },
      { id: 3, name: "Chemical Bonding", completed: false },
      { id: 4, name: "Thermochemistry", completed: false },
      { id: 5, name: "Electrochemistry", completed: false },
      { id: 6, name: "Organic Chemistry", completed: false },
      { id: 7, name: "Inorganic Chemistry", completed: false },
      { id: 8, name: "Chemical Kinetics", completed: false },
    ],
    Biology: [
      { id: 1, name: "Cell Biology", completed: false },
      { id: 2, name: "Genetics", completed: false },
      { id: 3, name: "Evolution", completed: false },
      { id: 4, name: "Human Anatomy", completed: false },
      { id: 5, name: "Ecology", completed: false },
    ],
    Computer: [
      { id: 1, name: "Introduction to Programming", completed: false },
      { id: 2, name: "Data Structures", completed: false },
      { id: 3, name: "Algorithms", completed: false },
      { id: 4, name: "Databases", completed: false },
      { id: 5, name: "Operating Systems", completed: false },
      { id: 6, name: "Computer Networks", completed: false },
      { id: 7, name: "Artificial Intelligence", completed: false },
      { id: 8, name: "Web Development", completed: false },
    ],
    English: [
      { id: 1, name: "Grammar", completed: false },
      { id: 2, name: "Comprehension", completed: false },
      { id: 3, name: "Writing Skills", completed: false },
      { id: 4, name: "Literature", completed: false },
    ],
  };

  const subjectColors = {
    Mathematics: "#c44536",
    Physics: "#118ab2",
    Chemistry: "#ef476f",
    Biology: "#136f63",
    Computer: "#073b4c",
    English: "#ff8c42",
  };

  return (
    <main className="flex flex-col items-center min-h-screen py-20 max-w-6xl gap-8 mx-auto px-5">
      <h1 className="text-4xl font-bold">XII - Syllabus</h1>

      <div className="flex justify-center gap-6 flex-wrap">
        {Object.entries(syllabus).map(([subject, chapters]) => (
          <Card
            key={subject}
            color={subjectColors[subject]}
            chapters={chapters}
            subject={subject}
          />
        ))}
      </div>
    </main>
  );
}

// 🧠 Each subject card
export function Card({ color, chapters, subject }) {
  const storageKey = `syllabus_${subject}`;
  const [items, setItems] = useState(chapters);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setItems(JSON.parse(saved));
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }, [items, hydrated, storageKey]);

  const handleToggle = (id, ref) => {
    setItems((prev) =>
      prev.map((ch) => {
        if (ch.id === id && !ch.completed) {
          playSound();        // ✅ play sound when checking
          triggerConfetti(ref); // 🎉 confetti effect
        }
        return ch.id === id ? { ...ch, completed: !ch.completed } : ch;
      })
    );
  };

  const playSound = () => {
    const audio = new Audio("/checked-sound.mp3");
    audio.volume = 0.6; // optional: adjust loudness
    audio.play().catch(() => { }); // avoid console warning if autoplay blocked
  };

  const triggerConfetti = (ref) => {
    if (!ref?.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 120,
      spread: 60,
      origin: { x, y },
      colors: ["#FF6B5A", "#FFA733", "#FFD740", "#29C9FF", "#62F608"],
      scalar: 1.2,
      ticks: 100,
    });
  };

  const completed = items.filter((c) => c.completed).length;
  const progress = Math.round((completed / items.length) * 100);

  if (!hydrated)
    return (
      <div
        style={{ backgroundColor: color }}
        className="shadow-black shadow-[5px_5px_0px_0px] w-80 h-60 animate-pulse rounded-md flex justify-center items-center"
      >
        <span className="loading loading-spinner"></span>
      </div>
    );

  return (
    <div
      style={{ backgroundColor: color }}
      className="shadow-black shadow-[5px_5px_0px_0px] w-80 rounded-md p-4 h-fit text-white"
    >
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-2xl font-bold">{subject}</h1>
        <span className="text-sm opacity-80">{progress}%</span>
      </div>

      <div className="w-full bg-white/20 rounded-full h-2 mb-3">
        <div
          className="bg-white h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <ul className="mt-2">
        {items.map((chapter) => (
          <ChapterItem
            key={chapter.id}
            chapter={chapter}
            onToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
}

// ✅ New subcomponent so each item can safely use useRef()
function ChapterItem({ chapter, onToggle }) {
  const checkboxRef = useRef(null);

  return (
    <li className="flex justify-between items-center py-1">
      <span
        className={`${chapter.completed ? "line-through opacity-70" : ""
          }`}
      >
        {chapter.id}. {chapter.name}
      </span>
      <input
        ref={checkboxRef}
        type="checkbox"
        className="checkbox bg-white text-emerald-500"
        checked={chapter.completed}
        onChange={() => onToggle(chapter.id, checkboxRef)}
      />
    </li>
  );
}
