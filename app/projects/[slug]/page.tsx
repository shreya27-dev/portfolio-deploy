import { notFound } from "next/navigation";
// Import your unique design components
import SnackosDesign from "@/app/components/work/SnackosDesign";
import CrowdFund from "@/app/components/work/CrowdFund";
import MovieDux from "@/app/components/work/MovieDux";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // 1. Await the params (Required for Next.js 15+)
  const { slug } = await params;

  // 2. Logic to return a completely different component per slug
  switch (slug) {
    case "snackos":
      return <SnackosDesign />;
    
    case "movieDux":
      return <MovieDux/>;
    
    case "crowd-funding":
      return <CrowdFund/>;

    default:
      // If the slug doesn't match, show the 404 page
      return notFound();
  }
}