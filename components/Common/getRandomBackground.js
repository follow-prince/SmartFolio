import { useEffect, useState } from "react";

export const backgrounds = [
    'bg-gradient-to-r from-violet-200 to-pink-200',
    'bg-gradient-to-r from-blue-200 to-cyan-200',
    'bg-gradient-to-r from-amber-200 to-yellow-400',
    'bg-gradient-to-r from-green-200 to-lime-200',
    'bg-gradient-to-r from-red-200 to-orange-200',
    'bg-gradient-to-r from-purple-200 to-pink-300',
    'bg-gradient-to-r from-teal-200 to-green-300',
    'bg-gradient-to-r from-indigo-200 to-blue-300',
    'bg-gradient-to-r from-pink-200 to-rose-300',
    'bg-gradient-to-r from-gray-200 to-slate-300',
    'bg-gradient-to-r from-emerald-200 to-teal-300',
    'bg-gradient-to-r from-cyan-200 to-sky-300',
    'bg-gradient-to-r from-yellow-200 to-amber-300',
];

export function GetRandomBackground() {
  const [randomBackground, setRandomBackground] = useState('');

  useEffect(() => {
    const index = Math.floor(Math.random() * backgrounds.length);
    setRandomBackground(backgrounds[index]);

    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * backgrounds.length);
      setRandomBackground(backgrounds[newIndex]);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return randomBackground;
}
