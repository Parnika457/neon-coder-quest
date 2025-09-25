import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Palette, TrendingUp, Shield, Cpu } from 'lucide-react';
import cyberMentor from '../assets/cyber-mentor.jpg';

interface Career {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  skills: string[];
}

const careers: Career[] = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'Master the art of code and build the digital future',
    icon: Code,
    gradient: 'bg-gradient-cyber',
    skills: ['JavaScript', 'React', 'Node.js', 'Databases', 'DevOps']
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Unlock insights from data and predict the future',
    icon: Database,
    gradient: 'bg-gradient-neon',
    skills: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Visualization']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Craft beautiful interfaces and user experiences',
    icon: Palette,
    gradient: 'bg-gradient-electric',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility']
  },
  {
    id: 'product-management',
    title: 'Product Management',
    description: 'Lead products from vision to market success',
    icon: TrendingUp,
    gradient: 'bg-gradient-cyber',
    skills: ['Strategy', 'Analytics', 'User Research', 'Roadmapping', 'Leadership']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect the digital world from cyber threats',
    icon: Shield,
    gradient: 'bg-gradient-neon',
    skills: ['Penetration Testing', 'Security Auditing', 'Incident Response', 'Cryptography', 'Risk Assessment']
  },
  {
    id: 'ai-ml-engineering',
    title: 'AI/ML Engineering',
    description: 'Build intelligent systems that learn and adapt',
    icon: Cpu,
    gradient: 'bg-gradient-electric',
    skills: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'Computer Vision', 'NLP']
  }
];

interface CareerSelectorProps {
  onCareerSelect: (career: Career) => void;
}

const CareerSelector: React.FC<CareerSelectorProps> = ({ onCareerSelect }) => {
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const handleCareerClick = (career: Career) => {
    setSelectedCareer(career);
  };

  const handleStartJourney = () => {
    if (selectedCareer) {
      onCareerSelect(selectedCareer);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="cyber-character w-32 h-32 rounded-full overflow-hidden neon-border">
              <img 
                src={cyberMentor} 
                alt="Cyber Mentor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="cyber-title mb-4">Welcome to CyberCareer</h1>
          <p className="cyber-subtitle max-w-2xl mx-auto">
            Choose your path in the digital realm. Each career track offers unique challenges, 
            interactive learning experiences, and real-world skills that will level up your professional journey.
          </p>
        </div>

        {/* Career Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {careers.map((career) => {
            const IconComponent = career.icon;
            const isSelected = selectedCareer?.id === career.id;
            
            return (
              <Card
                key={career.id}
                className={`cyber-card cursor-pointer transition-all duration-300 ${
                  isSelected ? 'neon-border scale-105' : ''
                }`}
                onClick={() => handleCareerClick(career)}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-lg ${career.gradient} flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent size={32} className="text-black" />
                  </div>
                  <h3 className="neon-text text-xl font-bold text-center mb-2">
                    {career.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-4">
                    {career.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {career.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Start Journey Button */}
        {selectedCareer && (
          <div className="text-center">
            <Button
              onClick={handleStartJourney}
              className="btn-cyber text-lg px-8 py-4"
              size="lg"
            >
              Begin {selectedCareer.title} Journey
            </Button>
            <p className="text-muted-foreground mt-4">
              Ready to master: {selectedCareer.skills.join(' • ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerSelector;