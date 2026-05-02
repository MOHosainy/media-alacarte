

export interface NavItem {
  label: string;
  route: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface SolutionCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlighted: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TeamMember {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface FooterLink {
  label: string;
  route: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface Content {
  nav: NavItem[];
  services: ServiceCard[];
  solutions: SolutionCard[];
  stats: StatItem[];
  team: TeamMember[];
  footer: FooterColumn[];
}