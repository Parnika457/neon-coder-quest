import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Palette, 
  Users, 
  Stethoscope, 
  Code, 
  MapPin, 
  Book, 
  Laptop, 
  CheckSquare,
  GraduationCap,
  Star
} from 'lucide-react';

const Recommendations = () => {
  const aptitudeResults = [
    {
      type: "Analytical",
      icon: Brain,
      skills: ["Problem Solving", "Critical Thinking", "Data Analysis"],
      isTopStrength: true
    },
    {
      type: "Creative",
      icon: Palette,
      skills: ["Design", "Innovation", "Visual Arts"],
      isTopStrength: false
    },
    {
      type: "Social",
      icon: Users,
      skills: ["Communication", "Leadership", "Teamwork"],
      isTopStrength: false
    },
    {
      type: "Medical",
      icon: Stethoscope,
      skills: ["Biology", "Chemistry", "Patient Care"],
      isTopStrength: false
    }
  ];

  const careers = [
    { name: "Software Engineer", description: "Build applications and systems", match: 95 },
    { name: "Data Scientist", description: "Analyze data for insights", match: 88 },
    { name: "Product Manager", description: "Lead product development", match: 82 },
    { name: "UX Designer", description: "Design user experiences", match: 75 },
    { name: "Research Analyst", description: "Conduct market research", match: 70 }
  ];

  const colleges = [
    {
      name: "IIT Delhi",
      courses: ["Computer Science", "Data Science"],
      location: "New Delhi",
    },
    {
      name: "NIT Trichy",
      courses: ["Software Engineering", "AI & ML"],
      location: "Tamil Nadu",
    },
    {
      name: "DTU",
      courses: ["Information Technology", "Mathematics & Computing"],
      location: "Delhi",
    },
    {
      name: "NID Ahmedabad",
      courses: ["Design", "Visual Communication"],
      location: "Gujarat",
    },
    {
      name: "NLSIU Bangalore",
      courses: ["Law", "Legal Studies"],
      location: "Karnataka",
    },
    {
      name: "IIIT Hyderabad",
      courses: ["Computer Science", "Computational Linguistics"],
      location: "Telangana",
    }
  ];

  const resources = [
    {
      title: "Mock Tests",
      description: "Practice aptitude and technical tests",
      icon: CheckSquare
    },
    {
      title: "Free E-books",
      description: "Download study materials and guides",
      icon: Book
    },
    {
      title: "Practice Projects",
      description: "Hands-on coding and design projects",
      icon: Laptop
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <GraduationCap size={64} className="mx-auto mb-4 text-white/90" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            Your Best Colleges & Skills Based on Aptitude
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-sans">
            Tailored career pathways with government college recommendations
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Skills & Aptitude Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-sans">
            Your Aptitude Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aptitudeResults.map((aptitude, index) => {
              const IconComponent = aptitude.icon;
              return (
                <Card key={index} className="relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent size={32} className="text-purple-600" />
                      {aptitude.isTopStrength && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <Star size={12} className="mr-1" />
                          Top Strength
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 font-sans">
                      {aptitude.type}
                    </h3>
                    <div className="space-y-2">
                      {aptitude.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Recommended Careers Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-sans">
            Recommended Career Paths
          </h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6 min-w-max">
              {careers.map((career, index) => (
                <Card key={index} className="min-w-[300px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-sans">
                      {career.name}
                    </h3>
                    <p className="text-gray-600 mb-4 font-sans">
                      {career.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Match</span>
                        <span className="text-sm font-bold text-purple-600">{career.match}%</span>
                      </div>
                      <Progress value={career.match} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Government Colleges Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-sans">
            Best Colleges for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 font-sans">
                      {college.name}
                    </h3>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Govt. College
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-2 font-sans">Recommended Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {college.courses.map((course, courseIndex) => (
                          <span key={courseIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm font-sans">{college.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-sans">
            Preparation Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl border-0 shadow-md cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <IconComponent size={48} className="mx-auto mb-4 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-sans">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 font-sans">
                      {resource.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recommendations;