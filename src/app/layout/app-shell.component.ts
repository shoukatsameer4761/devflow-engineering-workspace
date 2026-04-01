import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../core/theme.service';
import { DashboardTopbarComponent } from '../features/dashboard/components/dashboard-topbar.component';
import { DashboardSidebarComponent } from '../features/dashboard/components/dashboard-sidebar.component';
import { DashboardNavItem } from '../features/dashboard/models/dashboard.models';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, DashboardSidebarComponent, DashboardTopbarComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  protected readonly themeService = inject(ThemeService);
  protected readonly sidebarCollapsed = signal(false);
  protected readonly pageTitle = signal('Dashboard');

  protected readonly navItems: readonly DashboardNavItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'list_alt', label: 'Issues', route: '/issues' },
    { icon: 'view_kanban', label: 'Board', route: '/board' },
    { icon: 'assessment', label: 'Reports', route: '/reports' },
    { icon: 'group', label: 'Team', route: '/team' }
  ];

  constructor() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth <= 960) {
      this.sidebarCollapsed.set(true);
    }

    this.setPageTitle();

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.setPageTitle());
  }

  protected toggleSidebar(): void {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }

  private setPageTitle(): void {
    let nextTitle = 'Dashboard';
    let route = this.activatedRoute.root;

    while (true) {
      const nextRoute = route.firstChild;
      if (!nextRoute) {
        break;
      }

      route = nextRoute;

      const snapshot = route.snapshot;
      if (!snapshot) {
        continue;
      }

      const dataLabel = snapshot.data['breadcrumb'];
      if (typeof dataLabel === 'string' && dataLabel.length > 0) {
        nextTitle = dataLabel.replace(/:([A-Za-z0-9_]+)/g, (_, param: string) => {
          return snapshot.paramMap.get(param) ?? '';
        });
      }
    }

    this.pageTitle.set(nextTitle);
  }
}
