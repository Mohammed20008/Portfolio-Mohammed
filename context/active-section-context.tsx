'use client';
import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import { links } from '@/lib/data';
export type sectionName = (typeof links)[number]['name'];
type ActivesectionType = {
  activeSection: sectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActivesectionType | null>(
  null
);
export default function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<sectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionProvider'
    );
  }

  return context;
}
