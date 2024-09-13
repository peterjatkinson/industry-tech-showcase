import React, { useState } from 'react';
import { ShoppingCart, Film, Cpu, Coffee, Briefcase, HardHat } from 'lucide-react';

const industryData = {
  retail: {
    title: "Retail",
    icon: <ShoppingCart />,
    color: "#1e40af", // Darker blue for better contrast
    technologies: [
      "E-commerce",
      "AI for personalisation",
      "Augmented and virtual reality"
    ]
  },
  media: {
    title: "Media",
    icon: <Film />,
    color: "#b91c1c", // Darker red for better contrast
    technologies: [
      "Streaming platforms",
      "AI-generated content",
      "VR experiences"
    ]
  },
  tech: {
    title: "IT/Telco",
    icon: <Cpu />,
    color: "#047857", // Darker green for better contrast
    technologies: [
      "Cloud computing",
      "Cybersecurity",
      "Blockchain",
      "AI and ML"
    ]
  },
  fmcg: {
    title: "FMCG",
    icon: <Coffee />,
    color: "#b45309", // Darker orange for better contrast
    technologies: [
      "Consumer insights",
      "Supply chain automation",
      "Smart packaging"
    ]
  },
  consulting: {
    title: "Consulting",
    icon: <Briefcase />,
    color: "#5b21b6", // Darker purple for better contrast
    technologies: [
      "CRM tools",
      "Big data analytics",
      "AI-driven intelligence"
    ]
  },
  engineering: {
    title: "Engineering",
    icon: <HardHat />,
    color: "#9d174d", // Darker pink for better contrast
    technologies: [
      "3D printing",
      "Construction robotics",
      "Smart factories",
      "Digital twins"
    ]
  }
};

const Hexagon = ({ title, icon, items, isActive, onClick, color }) => (
  <div 
    className={`hexagon cursor-pointer transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}`}
    style={{
      backgroundColor: isActive ? color : '#ffffff',
      color: isActive ? '#ffffff' : '#000000',
      width: '200px',
      height: '230px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}
    onClick={onClick}
  >
    {React.cloneElement(icon, { 
      className: "h-10 w-10", 
      color: isActive ? '#ffffff' : color 
    })}
    <h3 className="font-bold text-lg mt-2">{title}</h3>
    {isActive && (
      <ul className="list-none p-0 mt-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm mt-1">{item}</li>
        ))}
      </ul>
    )}
  </div>
);

const IndustryTechShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState(null);

  return (
    <div className="p-8 min-h-screen flex flex-col justify-center items-center" style={{
      backgroundColor: '#3b82f6', // Solid dark blue background
    }}>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {Object.entries(industryData).map(([key, industry]) => (
          <Hexagon
            key={key}
            title={industry.title}
            icon={industry.icon}
            items={industry.technologies}
            isActive={activeIndustry === key}
            onClick={() => setActiveIndustry(activeIndustry === key ? null : key)}
            color={industry.color}
          />
        ))}
      </div>
      <button 
        onClick={() => setActiveIndustry(null)}
        className="mt-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Reset
      </button>
    </div>
  );
};

export default IndustryTechShowcase;