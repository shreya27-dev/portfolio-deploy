// src/data/certifications.ts

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  year: number;
  link: string; // <-- New field for the certificate URL
}

export const CERTIFICATES_DATA: Certificate[] = [
  { 
    id: 1, 
    name: 'UI/UX Design Specialization', 
    issuer: 'Coursera - University of Michigan', 
    year: 2024, 
    link: 'https://www.coursera.org/account/accomplishments/specialization/A_SAMPLE_LINK_1' 
  },
  { 
    id: 2, 
    name: 'Advanced React & TypeScript', 
    issuer: 'Udemy', 
    year: 2024, 
    link: 'https://www.udemy.com/certificate/A_SAMPLE_LINK_2' 
  },
  { 
    id: 3, 
    name: 'Data Structures & Algorithms', 
    issuer: 'FreeCodeCamp', 
    year: 2023, 
    link: 'https://www.freecodecamp.org/certification/A_SAMPLE_LINK_3' 
  },
  { 
    id: 4, 
    name: 'Next.js & Server Components', 
    issuer: 'Vercel Learn', 
    year: 2023, 
    link: 'https://vercel.com/learn/certificates/A_SAMPLE_LINK_4' 
  },
  // You will replace the 'A_SAMPLE_LINK_X' with your actual certificate URLs
];