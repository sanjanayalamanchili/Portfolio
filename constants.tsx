
import { Project, NavItem, Conference } from './types';

export const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: "Piece of You", 
    category: "Product Design", 
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", 
    description: "Designing a safe, accessible digital environment for mental wellness tracking and professional therapeutic connection.",
    link: "https://sanjanayportfolio.framer.website/mental-health-app"
  },
  { 
    id: 2, 
    title: "Motion Design Explorations", 
    category: "Motion Design", 
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", // Fallback URL
    description: "Bringing emotion, clarity, and interactivity to user experiences through thoughtful motion.",
    link: "https://www.figma.com/proto/Xy4dOBJaxafVQ1x0zf9Smb/Motion-Design?page-id=0%3A1&node-id=4-1584&t=rNsNTD2nMXHMUoli-1"
  },
  { 
    id: 3, 
    title: "The Tiffin Tribe", 
    category: "UX Design", 
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800", 
    description: "Simplifying meal subscriptions with clearer flows, better content, and responsive mobile-first thinking.",
    link: "https://www.figma.com/proto/TNuZ3MD728UmVSJmmU4mAq/THE-TIFFIN-TRIBE?page-id=0%3A1&node-id=18-19&starting-point-node-id=6%3A21&t=Uocdf0XtVfUwDLyY-1"
  },
  { 
    id: 4, 
    title: "Accessible 'Netflix' Interface", 
    category: "Accessibility Design", 
    imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800", 
    description: "Picture a Netflix where every viewer sees the story in full color, no matter their vision.",
    link: "https://www.canva.com/design/DAGqvGWB4SY/9Rd2tkRGdlIHx3Z-KK28MA/view?utm_content=DAGqvGWB4SY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3dadaf2677"
  },
  { 
    id: 5, 
    title: "Family Forge", 
    category: "UX Design", 
    imageUrl: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=800", 
    description: "A concept app to simplify the child adoption process, reduce emotional overwhelm, and support parents.",
    link: "https://www.figma.com/proto/6UcPG304F25oQMJxD8Fhyb/Child-adoption-app?page-id=0%3A1&node-id=1-66&starting-point-node-id=1%3A6&t=QR8h1FjEecqoibUX-1"
  }
];

export const CONFERENCES: Conference[] = [
  {
    id: 1,
    title: "Product Conference-2.0",
    location: "Boston, MA",
    date: "March 16, 2025",
    imageUrl: "product-conference.jpg",
    description: "Featured Case Study: Designing the digital experience for the Aspiring Product Managers Club (APMC) conference."
  },
  {
    id: 2,
    title: "Adobe Express Workshop",
    location: "Boston, MA",
    date: "March 26, 2025",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    description: "I taught this! Leading a hands-on session exploring rapid design prototyping and creative branding using Adobe Express for cross-functional teams."
  },
  {
    id: 3,
    title: "Boston Startup Week",
    location: "Boston, MA",
    date: "Sep 8th - 12th",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    description: "Coming soon! Looking forward to a week of networking, panels, and workshops centered around the growing tech ecosystem in Boston."
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "home" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Resume", href: "https://docs.google.com/document/d/1bb42Jm50HZAEiW16kKhpfAve0VKVZxgnT4QR-QBHhTs/edit?tab=t.0" },
  { label: "Conferences", href: "conferences" },
];
