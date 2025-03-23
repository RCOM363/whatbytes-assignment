"use client";

import React from "react";
import { useState, createContext, useContext } from "react";

interface ScoreContextType {
  rank: number;
  percentile: number;
  currentScore: number;
  setRank: (rank: number) => void;
  setPercentile: (percentile: number) => void;
  setCurrentScore: (currentScore: number) => void;
}

const ScoreContext = createContext<ScoreContextType | null>(null);

function ScoresProvider({ children }: { children: React.ReactNode }) {
  const [rank, setRank] = useState<number>(1);
  const [percentile, setPercentile] = useState<number>(30);
  const [currentScore, setCurrentScore] = useState<number>(10);
  return (
    <ScoreContext.Provider
      value={{
        rank,
        percentile,
        currentScore,
        setRank,
        setPercentile,
        setCurrentScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export default ScoresProvider;

// custom hook
export function useScore(): ScoreContextType {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
}
