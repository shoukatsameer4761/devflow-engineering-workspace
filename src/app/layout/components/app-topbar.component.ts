import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface AppBreadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-topbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './app-topbar.component.html',
  styleUrl: './app-topbar.component.scss'
})
export class AppTopbarComponent {
  readonly breadcrumbs = input<readonly AppBreadcrumb[]>([]);
  readonly themeMode = input<'light' | 'dark'>('light');
  readonly themeAriaLabel = input('Toggle theme');

  readonly toggleSidebar = output<void>();
  readonly toggleTheme = output<void>();
}
