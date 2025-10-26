"use client";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import InstallPWAButton from "@/components/InstallPWAButton";

export default function Home() {
  const syllabus = {
    Chemistry: [
      { id: 1, name: "Ethics and Values in Chemistry", completed: false },
      { id: 2, name: "Electrochemistry", completed: false },
      { id: 3, name: "Chemical Equilibria", completed: false },
      { id: 4, name: "Acid-base Chemistry", completed: false },
      { id: 5, name: "Group 2 Elements", completed: false },
      { id: 6, name: "The Transition Metals", completed: false },
      { id: 7, name: "Organic Chemistry", completed: false },
      { id: 8, name: "Hydrocarbons", completed: false },
      { id: 9, name: "Halogenoalkanes", completed: false },
      { id: 10, name: "Hydroxy Compounds", completed: false },
      { id: 11, name: "Carbonyl Compounds", completed: false },
      { id: 12, name: "Nitrogen Compounds", completed: false },
      { id: 13, name: "Polymers", completed: false },
      { id: 14, name: "Organic Synthesis", completed: false },
      { id: 15, name: "Biochemistry", completed: false },
      { id: 16, name: "Empirical Data Collection and Analysis", completed: false },
      { id: 17, name: "Qualitative Analysis", completed: false },
      { id: 18, name: "Spectroscopy", completed: false },
      { id: 19, name: "Chromatography", completed: false },
      { id: 20, name: "Materials", completed: false },
      { id: 21, name: "Medicine", completed: false },
      { id: 22, name: "Agriculture", completed: false },
      { id: 23, name: "Industry", completed: false },
    ],
    Urdu: [
      { id: 1, name: "کمال نفس اور مکارم اخلاق", completed: false },
      { id: 2, name: "محشر", completed: false },
      { id: 3, name: "ماں جی", completed: false },
      { id: 4, name: "رستم و سہراب", completed: false },
      { id: 5, name: "شاخوں پر جلے ہوئے بیرے", completed: false },
      { id: 6, name: "شروع قصے کا", completed: false },
      { id: 7, name: "بہادر خان کی سرگزشت", completed: false },
      { id: 8, name: "کافی", completed: false },
      { id: 9, name: "مینار", completed: false },
      { id: 10, name: "نظریہ پاکستان", completed: false },
      { id: 11, name: "حمد", completed: false },
      { id: 12, name: "نعت", completed: false },
      { id: 13, name: "میں روزے سے ہوں", completed: false },
      { id: 14, name: "شار میں تری گلیوں کے", completed: false },
      { id: 15, name: "انسان کامل کی برکات", completed: false },
      { id: 16, name: "نئی نسل کا نوحه", completed: false },
      { id: 17, name: "داستان تیاری میں باغ کی", completed: false },
      { id: 19, name: "جگ میں آکر ادھر ادھر دیکھا", completed: false },
      { id: 20, name: "سب کہاں، کچھ لالہ و گل میں نمایاں ہو گئیں", completed: false },
      { id: 21, name: "ستاروں سے آگے جہاں اور بھی ہیں", completed: false },
      { id: 22, name: "وہی خواب آنکھوں میں ڈال دے جو نشاط شام وصال دے", completed: false },
      { id: 23, name: "یہ فخر تو حاصل ہے بڑے ہیں کہ بھلے ہیں", completed: false },
    ],
    Biology: [
      { id: 1, name: "Digestive System of Man", completed: false },
      { id: 2, name: "Blood Circulatory System of Man", completed: false },
      { id: 3, name: "Respiratory System of Man", completed: false },
      { id: 4, name: "Urinary System of Man", completed: false },
      { id: 5, name: "Nervous System of Man", completed: false },
      { id: 6, name: "Endocrine System of Man", completed: false },
      { id: 7, name: "Skeletal System of Man", completed: false },
      { id: 8, name: "Thermoregulation, Homeostasis", completed: false },
      { id: 9, name: "Immunity", completed: false },
      { id: 10, name: "Biotechnology", completed: false },
      { id: 11, name: "Biostatistics and Data Analyzing", completed: false },
      { id: 12, name: "Structural Biology and Computational Biology", completed: false },
      { id: 13, name: "Climate Change", completed: false },
      { id: 14, name: "Selected Topics", completed: false },
      { id: 15, name: "Pharmacological Drugs", completed: false },
    ],
    Mathematics: [
      { id: 1, name: "Functions and Graphs", completed: false },
      { id: 2, name: "Limit, Continuity and Derivative", completed: false },
      { id: 3, name: "Integration", completed: false },
      { id: 4, name: "Differential Equations", completed: false },
      { id: 5, name: "Kinematics of Motion in a Straight Line", completed: false },
      { id: 6, name: "Analytical Geometry", completed: false },
      { id: 7, name: "Conic Section", completed: false },
      { id: 8, name: "Inverse Trigonometric Functions and Their Graphs", completed: false },
      { id: 9, name: "Solution of Trigonometric Equations", completed: false },
      { id: 10, name: "Numerical Methods", completed: false },
    ],
    Physics: [
      { id: 15, name: "Gravitation", completed: false },
      { id: 16, name: "Statistical Mechanics and Thermodynamics", completed: false },
      { id: 17, name: "Simple Harmonic Motion", completed: false },
      { id: 18, name: "Diffraction and Interference", completed: false },
      { id: 19, name: "Electric Potential and Capacitor", completed: false },
      { id: 20, name: "Alternating Current", completed: false },
      { id: 21, name: "Quantum Physics", completed: false },
      { id: 22, name: "Nuclear Physics", completed: false },
      { id: 23, name: "Cosmology", completed: false },
      { id: 24, name: "Earth's Climate", completed: false },
      { id: 25, name: "Medical Imaging", completed: false },
      { id: 26, name: "Nature of Science — A Debate", completed: false },
    ],
    "Pak St.": [
      { id: 1, name: "Ideology of Pakistan and Initial Problems", completed: false },
      { id: 2, name: "Political Developments in Pakistan", completed: false },
      { id: 3, name: "Land of Pakistan and Environmental Hazards", completed: false },
      { id: 4, name: "Natural Vegetation and Forests of Pakistan", completed: false },
      { id: 5, name: "Mineral, Power Resources & Telecommunication", completed: false },
      { id: 6, name: "Industry, Livestock and Fish Farming", completed: false },
      { id: 7, name: "National Integration and Social Cohesion", completed: false },
      { id: 8, name: "Recreation — Tourism", completed: false },
      { id: 9, name: "Constitutional Development", completed: false },
      { id: 10, name: "Rights and Responsibilities", completed: false },
      { id: 11, name: "Foreign Policy of Pakistan", completed: false },
      { id: 12, name: "Pakistan and International Organizations", completed: false },
    ],
    Computer: [
      { id: 1, name: "Computer Systems", completed: false },
      { id: 2, name: "Computational Thinking & Algorithms", completed: false },
      { id: 3, name: "Programming Fundamentals", completed: false },
      { id: 4, name: "Data and Analysis", completed: false },
      { id: 5, name: "Applications of Computer Science", completed: false },
      { id: 6, name: "Impacts of Computing", completed: false },
      { id: 7, name: "Digital Literacy", completed: false },
      { id: 8, name: "Entrepreneurship in Digital Age", completed: false },
    ],
    English: [
      { id: 1, name: "Lingkuan Gorge", completed: false },
      { id: 2, name: "Population Explosion in Pakistan", completed: false },
      { id: 3, name: "The Income-Tax Man", completed: false },
      { id: 4, name: "Rubaiyat of Omar Khayyam (Poem)", completed: false },
      { id: 5, name: "The Blanket", completed: false },
      { id: 6, name: "Stay Hungry – Stay Foolish", completed: false },
      { id: 7, name: "Tobacco and Your Health", completed: false },
      { id: 8, name: "The Sea (Poem)", completed: false },
      { id: 9, name: "First Year at Harrow", completed: false },
      { id: 10, name: "There’s a New Planet in Sight", completed: false },
      { id: 11, name: "Harvest Hymn (Poem)", completed: false },
      { id: 12, name: "The Kaghan Valley", completed: false },
      { id: 13, name: "After Twenty Years", completed: false },
      { id: 14, name: "The Solitary Reaper (Poem)", completed: false },
      { id: 15, name: "The Pearl (Novel)", completed: false },
    ],
  };

  const subjectColors = {
    Mathematics: "#c44536",
    Physics: "#118ab2",
    Chemistry: "#ef476f",
    Biology: "#136f63",
    Computer: "#073b4c",
    English: "#ff8c42",
    "Pak St.": "#003566",
    Urdu: "#181818",
  };

  return (
    <main className="flex flex-col items-center min-h-screen py-20 max-w-6xl gap-8 mx-auto px-5">
      <InstallPWAButton />
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
    </main >
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
          playSound();
          triggerConfetti(ref);
        }
        return ch.id === id ? { ...ch, completed: !ch.completed } : ch;
      })
    );
  };

  const playSound = () => {
    const audio = new Audio("/checked-sound.mp3");
    audio.volume = 0.6;
    audio.play().catch(() => { });
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
        className="shadow-black shadow-[7px_7px_0px_0px] w-80 h-60 animate-pulse rounded-md flex justify-center items-center"
      >
        <span className="loading loading-spinner"></span>
      </div>
    );

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      dir={subject === "Urdu" ? "rtl" : "ltr"}
      className="shadow-black shadow-[7px_7px_0px_0px] w-80 rounded-md p-4 h-fit text-white leading-relaxed"
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

      <ul style={{ fontFamily: subject === "Urdu" ? "var(--font-noto-urdu)" : "inherit", }} className="mt-2 text-sm">
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

// ✅ Each item uses its own ref
function ChapterItem({ chapter, onToggle }) {
  const checkboxRef = useRef(null);

  return (
    <li className="flex text-lg justify-between items-center gap-2 py-1">
      <span
        className={`${chapter.completed ? "line-through opacity-70" : ""}`}
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
