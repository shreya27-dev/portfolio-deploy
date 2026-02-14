import React from 'react';
import Image from 'next/image';
import SkillItem from './SkillItem';
import { SKILLS_DATA, CENTRAL_IMAGE_PATH } from '../data/skills'; // Corrected import path

const SkillsSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-[700px] py-16 overflow-hidden" 
      // Apply the background image style directly if needed, or use a Tailwind plugin
    >
      
      {/* --- Heading --- */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 pt-8 uppercase tracking-widest z-20 font-jaro">
        MY CREATIVE TOOL BOX
      </h2>

      {/* --- Central Container for Illustration & Skills --- */}
      <div className="relative w-full max-w-6xl mx-auto h-[700px] md:h-[600px]">
        
        {/* --- Central Illustration --- */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src={CENTRAL_IMAGE_PATH} 
            alt="Illustration of a person relaxing with a cat"
            width={1200}
            height={1200}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-200 md:w-[50rem]"
          />
        </div>

        {/* --- Skill Icons (Mapped) --- */}
        {SKILLS_DATA.map((skill, index) => (
  <SkillItem key={skill.id} skill={skill} index={index} />
))}


      </div>
    </section>
  );
};

export default SkillsSection;