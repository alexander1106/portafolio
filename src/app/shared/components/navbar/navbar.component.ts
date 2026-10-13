import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  isDark = true;
  scrolled = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDark = savedTheme !== 'light';
    this.applyTheme();
    this.scrolled = window.scrollY > 10;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 10;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  goHome() {
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goTo(event: Event, sectionId: string) {
    event.preventDefault();
    this.closeMenu();

    if (this.router.url !== '/' && this.router.url !== '') {
      this.router.navigate(['/']).then(() => this.scrollToSection(sectionId));
      return;
    }

    this.scrollToSection(sectionId);
  }

  private scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
  toggleTheme() {
    this.isDark = !this.isDark;
    this.applyTheme();
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  private applyTheme(): void {
    document.body.classList.toggle('light-theme', !this.isDark);
  }
}


