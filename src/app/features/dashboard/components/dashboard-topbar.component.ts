import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { ThemeService } from '../../../core/theme.service';

@Component({
  selector: 'app-dashboard-topbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="topbar-shell">
      <div class="title-wrap">
        <button class="icon-btn" type="button" aria-label="Toggle sidebar" (click)="toggleSidebar.emit()">
          <span class="material-symbols-outlined">dock_to_left</span>
        </button>
        <h2>{{ title() }}</h2>
      </div>

      <div class="topbar-actions">
        <button
          class="icon-btn"
          type="button"
          [attr.aria-label]="themeService.themeToggleAriaLabel()"
          (click)="themeService.toggleTheme()"
        >
          <span class="material-symbols-outlined">{{ themeService.mode() === 'dark' ? 'light_mode' : 'dark_mode' }}</span>
        </button>

        <button class="new-task-btn" type="button">
          <span class="material-symbols-outlined">add</span>
          <span>New task</span>
        </button>

        <button class="icon-btn" type="button" aria-label="Notifications">
          <span class="material-symbols-outlined">notifications</span>
          <span class="notification-dot" aria-hidden="true"></span>
        </button>

        <div class="avatar-chip">AR</div>
      </div>
    </header>
  `,
  styleUrl: './dashboard-topbar.component.scss'
})
export class DashboardTopbarComponent {
  protected readonly themeService = inject(ThemeService);
  readonly title = input('Dashboard');
  readonly toggleSidebar = output<void>();
}
