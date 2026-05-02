
import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContentService } from '../../core/services/content-service';
import { NavItem } from '../../core/models/content';
import { ButtonComponent } from '../../shared/components/button/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './navbar-component.html',
  styleUrls: ['./navbar-component.scss'],
})
export class NavbarComponent implements OnInit {
  private contentService = inject(ContentService);

  navItems: NavItem[] = [];
  isScrolled = false;
  menuOpen = false;

  ngOnInit(): void {
    this.navItems = this.contentService.getNavItems();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}