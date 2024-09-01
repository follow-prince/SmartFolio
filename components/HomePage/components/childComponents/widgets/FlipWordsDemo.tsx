import React from "react";
import { FlipWords } from "@/components/HomePage/ui/flip-words";
import { IconBriefcase } from '@tabler/icons-react';


export function FlipWordsDemo() {
  const words = ["Developer", "Creator", "Volunteer", "Learner"];

  return (
      <div className="flex gap-1 pl-2 font-bold text-neutral-600 dark:text-neutral-400">
    <IconBriefcase size={18} stroke={1.5} />  I{"'"}m<FlipWords words={words} /> 
      </div>
  );
}
