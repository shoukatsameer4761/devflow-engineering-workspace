import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TeamNavItem } from '../models/team-management.models';

@Component({
  selector: 'app-team-management-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="team-sidebar" aria-label="Primary navigation">
      <div class="brand-wrap">
        <div class="brand-icon">
          <span class="material-symbols-outlined">terminal</span>
        </div>
        <div>
          <p class="brand-name">DevFlow</p>
          <p class="brand-sub">Engineering Hub</p>
        </div>
      </div>

      <nav class="menu-list" aria-label="Workspace sections">
        @for (item of navItems(); track item.label) {
          @if (item.route) {
            <a
              class="menu-item"
              [routerLink]="item.route"
              routerLinkActive="is-active"
              [routerLinkActiveOptions]="{ exact: item.route === '/dashboard' || item.route === '/issues' || item.route === '/board' || item.route === '/team' || item.route === '/reports' }"
            >
              <span class="material-symbols-outlined">{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </a>
          } @else {
            <button class="menu-item menu-button" type="button">
              <span class="material-symbols-outlined">{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </button>
          }
        }
      </nav>

      <div class="feedback-wrap">
        <button class="feedback-btn" type="button">Feedback</button>
      </div>
    </aside>
  `,
  styleUrl: './team-management-sidebar.component.scss'
})
export class TeamManagementSidebarComponent {
  readonly navItems = input.required<readonly TeamNavItem[]>();
}
