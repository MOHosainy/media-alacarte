// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class ContentService {}
import { Injectable } from '@angular/core';
import {
  NavItem, ServiceCard, SolutionCard,
  StatItem, TeamMember, FooterColumn
} from '../models/content';

/**
 * ContentService centralizes all static content.
 * No hardcoded values in components — all data flows from here.
 */
@Injectable({ providedIn: 'root' })
export class ContentService {

  getNavItems(): NavItem[] {
    return [
       { label: 'Home', route: '/' },
      { label: 'The Platform', route: '/platform' },
      { label: 'Features',     route: '/features'  },
      { label: 'Benefits',     route: '/benefits'  },
      { label: 'Request a Demo', route: '/request-a-demo' },
      { label: 'Contact Us',   route: '/contact'   },
      { label: 'About Us',     route: '/about'     },
      //  { label: 'Login',        route: '/login'     },
    ];
  }

  getContactInfo() {
  return {
    title: 'Let’s Build Smarter Media Campaigns',
    subtitle:
      'Reach out to our team and discover how Media Ala Carte can transform your advertising workflow.',
    
    email: 'hello@mediaalacarte.com',
    phone: '01007012871',
    location: 'Cairo, Egypt',

    socials: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/medialacarte/',
      },
      {
        name: 'Instagram',
        link: 'https://instagram.com/',
      },
    ],
  };
}


getLoginData() {
  return {
    title: 'Welcome Back',
    subtitle: 'Login to continue to Media Alacarte',
    emailPlaceholder: 'Email Address',
    passwordPlaceholder: 'Password',
    loginBtn: 'Login',
  };
}



getAboutData() {
  return {
    title: 'About Media Alacarte',
    highlight: 'Media Alacarte',
    text:
      'We are a modern media platform focused on simplifying media buying through data-driven decisions, automation, and smarter collaboration between brands, agencies, and media owners.',

    stats: [
      {
        value: '10K+',
        label: 'Campaigns Managed',
      },
      {
        value: '500+',
        label: 'Trusted Partners',
      },
      {
        value: '98%',
        label: 'Performance Satisfaction',
      },
    ],
  };
}






getBenefitsData() {
  return {
    title: 'Why Choose Media Alacarte?',
    highlight: 'Media Alacarte',
    subtitle:
      'Unlock smarter media buying with measurable impact, automation, and full control over your campaigns.',

    items: [
      {
        icon: '🚀',
        title: 'Faster Results',
        desc: 'Reduce campaign setup time and reach your audience instantly.',
      },
      {
        icon: '💰',
        title: 'Cost Efficiency',
        desc: 'Optimize your budget and maximize ROI with smart automation.',
      },
      {
        icon: '📈',
        title: 'Better Performance',
        desc: 'Make data-driven decisions that improve your campaign results.',
      },
      {
        icon: '🔒',
        title: 'Secure Platform',
        desc: 'Enterprise-level security for all your media transactions.',
      },
    ],
  };
}







getFeaturesData() {
  return {
    title: 'Powerful Features',
    highlight: 'Features',
    subtitle:
      'Everything you need to plan, execute, and optimize your media campaigns in one platform.',

    items: [
      {
        icon: '⚡',
        title: 'Fast Campaign Setup',
        desc: 'Launch campaigns in minutes with smart automation tools.',
      },
      {
        icon: '📊',
        title: 'Real-time Analytics',
        desc: 'Track performance instantly with live insights and dashboards.',
      },
      {
        icon: '🎯',
        title: 'Precise Targeting',
        desc: 'Reach the right audience using advanced segmentation.',
      },
      {
        icon: '🤝',
        title: 'Team Collaboration',
        desc: 'Work together seamlessly across teams and agencies.',
      },
    ],
  };
}




getPlatformData() {
  return {
    title: 'Welcome to Media Alacarte',
    highlight: 'Media Alacarte',
    subtitle:
      'Build smarter media campaigns with data, automation, and performance insights.',
    cta: 'Explore Platform',
  };
}


getDemoData() {
  return {
    eyebrow: 'Request a Demo',
    titleMain: 'Experience Smarter',
    titleHighlight: 'Media Buying',
    desc: 'Discover how Media Ala Carte helps advertisers, agencies, and media owners streamline campaigns, automate workflows, and maximize ROI.',
    actions: {
      primary: 'Book a Demo',
      secondary: 'Explore Platform'
    }
  };
}





  getServiceCards(): ServiceCard[] {
    return [
      {
        id: 'advertisers',
        title: 'Advertisers',
        description: 'Run & optimize ads across multiple platforms effortlessly.',
        imageUrl: 'assets/images/people.jpg',
      },
      {
        id: 'agencies',
        title: 'Agencies',
        description: 'Streamline workflows and manage campaigns at scale.',
        imageUrl: 'assets/images/people.jpg',
      },
      {
        id: 'media-owners',
        title: 'Media Owners',
        description: 'Monetize your inventory with precision and ease.',
        imageUrl: 'assets/images/people.jpg',
      },
    ];
  }


  getMarqueeItems1(): string[] {
  return [
    'We simplify media buying with smart automation',
    'Seamless execution, and measurable impact.',
  ];
}

getMarqueeItems2(): string[] {
  return [
    'Coming soon: Smarter media solutions for agencies and media owners!',
    'Coming soon: Smarter media solutions for agencies and media owners!',
  ];
}

  getSolutionCards(): SolutionCard[] {
    return [
      {
        id: 'campaign-planning',
        icon: '📣',
        title: 'Campaign Planning',
        description: 'Plan and optimize your ad campaigns with data-driven insights and seamless collaboration for maximum impact.',
        highlighted: false,
      },
      {
        id: 'media-buying',
        icon: '▶',
        title: 'Media Buying',
        description: 'Effortlessly book media slots with AI-powered automation, ensuring cost efficiency and better reach.',
        highlighted: false,
      },
      {
        id: 'ad-distribution',
        icon: '📢',
        title: 'Ad Distribution',
        description: 'Distribute ads across multiple channels while ensuring precise targeting and real-time tracking.',
        highlighted: true,
      },
      {
        id: 'performance-analytics',
        icon: '📊',
        title: 'Performance Analytics',
        description: 'Gain actionable insights with real-time performance tracking to maximize your ROI and refine future strategies.',
        highlighted: false,
      },
    ];
  }

  getStats(): StatItem[] {
    return [
      { value: '110+', label: 'Top Agencies Trust Media LaCarte' },
      { value: '1M',   label: 'Advertisers Reaching the Right Audience' },
      { value: '98.99%', label: 'Seamless Media Transactions for Owners' },
    ];
  }

  getTeamMembers(): TeamMember[] {
    return Array.from({ length: 8 }, (_, i) => ({
      id: `member-${i + 1}`,
      name: `Expert ${i + 1}`,
      avatarUrl: `https://i.pravatar.cc/80?img=${i + 10}`,
    }));
  }













  getFooterColumns(): FooterColumn[] {
    return [
      {
        title: 'Useful Links',
        links: [
          { label: 'The Platform',   route: '/platform' },
          { label: 'Features',       route: '/features'  },
          { label: 'Benefits',       route: '/benefits'  },
          { label: 'Request a Demo', route: '/demo'      },
        ],
      },
      {
        title: '',
        links: [
          { label: 'Contact Us',    route: '/contact' },
          { label: 'About Us',      route: '/about'   },
          { label: 'Privacy Policy', route: '/privacy' },
          { label: 'Terms of Service', route: '/terms' },
        ],
      },
    ];
  }

  getMarqueeItems(): string[] {
    return [
      'We simplify media buying with smart automation',
      'Smarter media solutions for agencies and media owners',
      'Data-driven execution and measurable impact',
      'Coming soon: Next-level media intelligence',
    ];
  }
}