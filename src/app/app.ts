import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly router = inject(Router);
  protected readonly language = inject(LanguageService);
  protected readonly menuOpen = signal(false);
  protected readonly route = signal('home');

  constructor() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe((event) => {
      this.route.set(event.urlAfterRedirects.split('/')[1] || 'home');
      this.menuOpen.set(false);
    });
  }

  protected toggleMenu(): void { this.menuOpen.update((open) => !open); }
  protected toggleLanguage(): void { this.language.toggle(); }
}
