import React, { useState } from 'react';
import CyberBackground from '../components/CyberBackground';
import CareerSelector from '../components/CareerSelector';
import LevelProgression from '../components/LevelProgression';

interface Career {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  skills: string[];
}

type AppState = 'career-selection' | 'level-progression';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('career-selection');
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const handleCareerSelect = (career: Career) => {
    setSelectedCareer(career);
    setAppState('level-progression');
  };

  const handleBackToCareerSelection = () => {
    setAppState('career-selection');
    setSelectedCareer(null);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <CyberBackground />
      
      {appState === 'career-selection' && (
        <CareerSelector onCareerSelect={handleCareerSelect} />
      )}
      
      {appState === 'level-progression' && selectedCareer && (
        <LevelProgression 
          careerTitle={selectedCareer.title}
          onBack={handleBackToCareerSelection}
        />
      )}
    </main>
  );
};

export default Index;