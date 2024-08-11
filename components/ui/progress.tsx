"use client";

import { FC, useEffect, useState } from "react";

interface ProgressProps {
  value: number;
}
const Progress: FC<ProgressProps> = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);
  return (
    <div className="relative w-full bg-gray-200 rounded-full h-1">
      <div
        className="transition-width duration-500 ease-in-out absolute h-1 bg-primary rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Progress;
