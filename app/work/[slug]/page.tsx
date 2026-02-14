// app/work/[slug]/page.tsx
import { notFound } from "next/navigation";
import ProjectMng from "@/app/components/project/project-management"; // Adjusted path based on your screenshot
import HostingPlatform from "@/app/components/project/Hosting";
import TicketingTool from "@/app/components/project/Ticketing";
import WebsiteRedesign from "@/app/components/project/WebsiteRedesign";

export default async function WorkProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // This matches the URL /work/project-management
  switch (slug) {
    case "project-management": 
      return <ProjectMng />;

    case "hosting": 
      return <HostingPlatform />;

    case "Ticketing-Tool":
      return <TicketingTool/>;

    case "redesign":
      return <WebsiteRedesign/>
      
      
    default:
      notFound();
  }
}