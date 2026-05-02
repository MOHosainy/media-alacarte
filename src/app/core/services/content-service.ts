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
      { label: 'The Platform', route: '/platform' },
      { label: 'Features',     route: '/features'  },
      { label: 'Benefits',     route: '/benefits'  },
      { label: 'Request a Demo', route: '/demo'    },
      { label: 'Contact Us',   route: '/contact'   },
      { label: 'About Us',     route: '/about'     },
    ];
  }

  getServiceCards(): ServiceCard[] {
    return [
      {
        id: 'advertisers',
        title: 'Advertisers',
        description: 'Run & optimize ads across multiple platforms effortlessly.',
        imageUrl: 'fruit.jpg',
      },
      {
        id: 'agencies',
        title: 'Agencies',
        description: 'Streamline workflows and manage campaigns at scale.',
        imageUrl: 'fruit.jpg',
      },
      {
        id: 'media-owners',
        title: 'Media Owners',
        description: 'Monetize your inventory with precision and ease.',
        imageUrl: 'fruit.jpg',
      },
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