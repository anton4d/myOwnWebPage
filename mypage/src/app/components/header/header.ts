import { Component, signal, HostListener } from '@angular/core';
import { LucideAngularModule, Github, Linkedin } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-header',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly githubIcon = Github;
  readonly linkedinIcon = Linkedin;
  readonly minWidth = 780 // The min width a screen should be before it changed from a full header to a menu

  menuOpen = signal(false);
  isWide = signal(typeof window !== 'undefined' ? window.innerWidth > this.minWidth : true);

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }
  
  closeMenu() {
  this.menuOpen.set(false);
  }

  @HostListener('window:resize')
  onResize() {
    if (typeof window !== 'undefined') {
      this.isWide.set(window.innerWidth > this.minWidth);
    }
  }
}