import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  CheckCircle, 
  Lock, 
  Star, 
  Trophy, 
  Zap, 
  Target,
  ArrowLeft,
  Code,
  FileText,
  Video,
  Puzzle
} from 'lucide-react';
import cyberHacker from '../assets/cyber-hacker.jpg';

interface Level {
  id: number;
  title: string;
  cyberpunkName: string;
  description: string;
  xp: number;
  status: 'locked' | 'available' | 'completed';
  type: 'theory' | 'practical' | 'project' | 'challenge';
  resources: {
    type: 'video' | 'document' | 'interactive' | 'code';
    title: string;
    duration?: string;
  }[];
}

interface UserProfile {
  name: string;
  level: number;
  totalXP: number;
  badges: string[];
  completedLevels: number[];
}

const softwareEngineeringLevels: Level[] = [
  {
    id: 1,
    title: 'Programming Fundamentals',
    cyberpunkName: 'DEBUG_INIT',
    description: 'Master the basics of programming logic and syntax',
    xp: 100,
    status: 'available',
    type: 'theory',
    resources: [
      { type: 'video', title: 'Variables and Data Types', duration: '15 min' },
      { type: 'interactive', title: 'Syntax Playground', duration: '20 min' },
      { type: 'code', title: 'First Program Challenge' }
    ]
  },
  {
    id: 2,
    title: 'Version Control Mastery',
    cyberpunkName: 'GIT_COMMIT',
    description: 'Learn to manage code versions like a pro',
    xp: 150,
    status: 'locked',
    type: 'practical',
    resources: [
      { type: 'video', title: 'Git Fundamentals', duration: '25 min' },
      { type: 'interactive', title: 'Branch & Merge Simulator', duration: '30 min' },
      { type: 'code', title: 'Collaborative Coding Task' }
    ]
  },
  {
    id: 3,
    title: 'Web Development Basics',
    cyberpunkName: 'WEB_DEPLOY',
    description: 'Build your first interactive web application',
    xp: 200,
    status: 'locked',
    type: 'project',
    resources: [
      { type: 'document', title: 'HTML/CSS/JS Guide' },
      { type: 'video', title: 'Building Modern UIs', duration: '35 min' },
      { type: 'code', title: 'Portfolio Project' }
    ]
  },
  {
    id: 4,
    title: 'Database Integration',
    cyberpunkName: 'DATA_LINK',
    description: 'Connect your apps to persistent data storage',
    xp: 250,
    status: 'locked',
    type: 'practical',
    resources: [
      { type: 'video', title: 'Database Design Principles', duration: '30 min' },
      { type: 'interactive', title: 'SQL Playground', duration: '40 min' },
      { type: 'code', title: 'API Integration Challenge' }
    ]
  },
  {
    id: 5,
    title: 'Advanced Algorithms',
    cyberpunkName: 'ALGO_HACK',
    description: 'Solve complex problems with elegant algorithms',
    xp: 300,
    status: 'locked',
    type: 'challenge',
    resources: [
      { type: 'document', title: 'Algorithm Patterns' },
      { type: 'interactive', title: 'Coding Interview Prep', duration: '45 min' },
      { type: 'code', title: 'Optimization Challenge' }
    ]
  }
];

interface LevelProgressionProps {
  careerTitle: string;
  onBack: () => void;
}

const LevelProgression: React.FC<LevelProgressionProps> = ({ careerTitle, onBack }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Cyber Warrior',
    level: 1,
    totalXP: 0,
    badges: [],
    completedLevels: []
  });
  
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

  const handleLevelClick = (level: Level) => {
    if (level.status !== 'locked') {
      setSelectedLevel(level);
    }
  };

  const handleStartLevel = () => {
    if (selectedLevel) {
      // Simulate level completion
      const newProfile = {
        ...userProfile,
        totalXP: userProfile.totalXP + selectedLevel.xp,
        completedLevels: [...userProfile.completedLevels, selectedLevel.id]
      };
      
      // Update level statuses
      const updatedLevels = softwareEngineeringLevels.map(level => {
        if (level.id === selectedLevel.id) {
          return { ...level, status: 'completed' as const };
        }
        if (level.id === selectedLevel.id + 1) {
          return { ...level, status: 'available' as const };
        }
        return level;
      });
      
      setUserProfile(newProfile);
      setSelectedLevel(null);
      
      // Show success message (you could use toast here)
      console.log('Level completed!');
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'document': return FileText;
      case 'interactive': return Puzzle;
      case 'code': return Code;
      default: return FileText;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'available': return Play;
      case 'locked': return Lock;
      default: return Lock;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'theory': return 'bg-primary';
      case 'practical': return 'bg-secondary';
      case 'project': return 'bg-accent';
      case 'challenge': return 'bg-gradient-cyber';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen p-6 relative z-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="btn-secondary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Careers
          </Button>
          
          <div className="text-center">
            <h1 className="cyber-title text-2xl md:text-3xl">{careerTitle} Path</h1>
            <p className="cyber-subtitle">Level up your skills • Unlock your potential</p>
          </div>
          
          <div className="text-right">
            <div className="neon-text font-bold">Level {userProfile.level}</div>
            <div className="text-muted-foreground">{userProfile.totalXP} XP</div>
          </div>
        </div>

        {/* User Progress */}
        <Card className="cyber-card mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <div className="cyber-character w-20 h-20 rounded-full overflow-hidden neon-border">
                <img 
                  src={cyberHacker} 
                  alt="Cyber Hacker" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="neon-text text-xl font-bold mb-2">{userProfile.name}</h3>
                <div className="progress-cyber mb-2">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(userProfile.totalXP % 500) / 500 * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{userProfile.totalXP % 500} / 500 XP</span>
                  <span>Next Level: {userProfile.level + 1}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-gradient-cyber">
                  <Trophy size={16} className="mr-1" />
                  {userProfile.completedLevels.length} Levels
                </Badge>
                <Badge variant="secondary" className="bg-gradient-neon">
                  <Star size={16} className="mr-1" />
                  {userProfile.badges.length} Badges
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Level Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareEngineeringLevels.map((level, index) => {
            const StatusIcon = getStatusIcon(level.status);
            const isCompleted = level.status === 'completed';
            const isLocked = level.status === 'locked';
            
            return (
              <Card
                key={level.id}
                className={`cyber-card cursor-pointer transition-all duration-300 ${
                  isCompleted ? 'level-completed' : ''
                } ${isLocked ? 'level-locked' : ''}`}
                onClick={() => handleLevelClick(level)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge className={`${getTypeColor(level.type)} text-black font-bold`}>
                      {level.type.toUpperCase()}
                    </Badge>
                    <StatusIcon 
                      size={24} 
                      className={
                        isCompleted ? 'text-secondary' : 
                        isLocked ? 'text-muted-foreground' : 'text-primary'
                      }
                    />
                  </div>
                  <CardTitle className="neon-text text-lg">
                    {level.cyberpunkName}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{level.title}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm mb-4">{level.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {level.resources.map((resource, i) => {
                      const ResourceIcon = getResourceIcon(resource.type);
                      return (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <ResourceIcon size={14} />
                          <span>{resource.title}</span>
                          {resource.duration && (
                            <span className="ml-auto">{resource.duration}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Zap size={16} className="text-primary" />
                      <span className="text-sm font-medium">{level.xp} XP</span>
                    </div>
                    {!isLocked && (
                      <Button
                        size="sm"
                        className="btn-cyber text-xs px-4 py-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLevel(level);
                        }}
                      >
                        {isCompleted ? 'Review' : 'Start'}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Level Modal */}
      {selectedLevel && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <Card className="cyber-card max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="cyber-title text-2xl">
                    {selectedLevel.cyberpunkName}
                  </CardTitle>
                  <p className="cyber-subtitle">{selectedLevel.title}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedLevel(null)}
                  className="btn-secondary"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{selectedLevel.description}</p>
              
              <div>
                <h4 className="neon-text font-bold mb-3">Learning Resources</h4>
                <div className="space-y-3">
                  {selectedLevel.resources.map((resource, i) => {
                    const ResourceIcon = getResourceIcon(resource.type);
                    return (
                      <div key={i} className="cyber-card p-4">
                        <div className="flex items-center gap-3">
                          <ResourceIcon size={20} className="text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">{resource.title}</div>
                            {resource.duration && (
                              <div className="text-sm text-muted-foreground">
                                {resource.duration}
                              </div>
                            )}
                          </div>
                          <Button size="sm" variant="outline" className="btn-secondary">
                            <Play size={14} className="mr-1" />
                            Open
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Target size={20} className="text-primary" />
                  <span className="font-medium">Reward: {selectedLevel.xp} XP</span>
                </div>
                <Button onClick={handleStartLevel} className="btn-cyber">
                  Complete Level
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LevelProgression;