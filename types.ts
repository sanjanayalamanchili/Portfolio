
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Conference {
  id: number;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
  description: string;
}
