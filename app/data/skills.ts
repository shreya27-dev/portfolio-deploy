// Define the shape of a single skill item
export interface Skill {
  id: number;
  name: string;
  iconPath: string; // Path relative to the public directory
  style: string;    // Tailwind CSS classes for positioning (e.g., 'top-[35%] left-[10%]')
}

// Your actual skill data
export const SKILLS_DATA: Skill[] = [
  // IMPORTANT: For the paths, assume you place your icons in `public/icons/`
  { id: 1, name: 'React', iconPath: '/images/skills/react.svg', style: 'top-[45%] left-[0%] w-14 md:w-16' }, 
  { id: 2, name: 'Figma', iconPath: '/images/skills/figma.svg', style: 'top-[25%] left-[1%] w-10 md:w-12' }, 
  { id: 3, name: 'Next.js', iconPath: '/images/skills/next_js.svg', style: 'top-[10%] left-[15%] w-16 md:w-20' }, 
  
  // Center cluster top
  { id: 4, name: 'MySQL', iconPath: '/images/skills/sql.svg', style: 'top-[10%] left-[65%] w-12 md:w-16' }, 
  { id: 5, name: 'After Effects', iconPath: '/images/skills/adobe_effects.svg', style: 'top-[5%] right-[45%] w-12 md:w-16' }, 
  
  // Top-right quadrant
  { id: 6, name: 'Tailwind', iconPath: '/images/skills/tailwind.svg', style: 'top-[25%] right-[12%] w-14 md:w-16' }, 
  
  // Right side
  { id: 7, name: 'HTML5', iconPath: '/images/skills/html.svg', style: 'top-[45%] right-[2%] w-12 md:w-14' }, 
  
  // Bottom side
  { id: 8, name: 'Python', iconPath: '/images/skills/python.svg', style: 'top-[80%] left-[40%] w-10 md:w-12' }, 

];

// If you have a separate image for the central illustration (recommended):
export const CENTRAL_IMAGE_PATH = '/images/skills/Skills_Main.svg'; 