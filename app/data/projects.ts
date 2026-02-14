// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  short: string;
  year?: string;
  role?: string;
  thumb: string; // public path
  hero?: string;
  content?: string; // markdown or HTML (simple)
  externalUrl?: string;
  isLocked?: boolean;
  
};

export const projects: Project[] = [
  {
    slug: "snackos",
    title: "Snackos : Food Ordering",
    short: "Snack ordering app for movie theater",
    thumb: "/images/snackos.svg",
    // Add more fields here to show on the dynamic page!
  },

  {
    slug: "movieDux",
    title: "movieDux : Movie streaming Platform",
    short: "Search movies and add it to your wishlist",
    thumb: "/images/Moviedux.png",
  },

  {
    slug: "crowd-funding",
    title: "Crowd Fund : Supporting community",
    short: "Support for small business ideas",
    thumb: "/images/Crowfunding.jpg",
    isLocked: true,
    // Add more fields here to show on the dynamic page!
  },
  
];

