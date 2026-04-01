import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardNavItem } from '../models/dashboard.models';

@Component({
  selector: 'app-dashboard-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar-shell" [class.is-collapsed]="collapsed()" aria-label="Sidebar navigation">
      <div class="brand-block">
        <div class="brand-icon">
          <span class="material-symbols-outlined">terminal</span>
        </div>
        <div class="brand-text">
          <h1>DevFlow</h1>
          <p>Engineering Workspace</p>
        </div>
      </div>

      <button class="new-issue-btn" type="button">
        <span class="material-symbols-outlined">add</span>
        New Issue
      </button>

      <nav class="side-nav">
        @for (item of navItems(); track item.label) {
          @if (item.route) {
            <a
              class="nav-item"
              [routerLink]="item.route"
              routerLinkActive="is-active"
              [routerLinkActiveOptions]="{ exact: item.route !== '/issues' }"
            >
              <span class="material-symbols-outlined">{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </a>
          } @else {
            <button class="nav-item nav-item-button" type="button">
              <span class="material-symbols-outlined">{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </button>
          }
        }

        <div class="side-section-label">Your Projects</div>
        <a class="nav-item" href="#">
          <span class="project-dot success"></span>
          <span>Engine</span>
        </a>
        <a class="nav-item" href="#">
          <span class="project-dot warning"></span>
          <span>Design System</span>
        </a>
      </nav>

      <div class="bottom-nav">
        <a class="nav-item" href="#">
          <span class="material-symbols-outlined">menu_book</span>
          <span>Documentation</span>
        </a>
        <a class="nav-item" href="#">
          <span class="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </a>

        <div class="profile-block">
          <div class="profile-avatar">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaQ6zN9j4k9-o7hYR4t1FpqhF9rLCmdhe39HnasmdSQo7fmay0z4afIGBnGkMNgh8vJPmiLgNW8XpS28F5SfyrDr3cNLGAPRMV0R642XsbxRo27EPqivq1pEGvv4KMloI3hCh4AQ-NaNTZsoBdytsoYXF2Wlq4A8bvLexO0ZS3Wwpfw5vNRx7bJ5npe7pH8IianvYdFvF9D6AaZNg5BiZCkOCz1ORA7LWkTp_5lk2N5XO24-X3JEytr08aLcaSX2p8rACMonff6Ka9"
              alt="Alex Rivers profile"
            />
          </div>
          <div class="profile-text">
            <p class="name">Alex Rivers</p>
            <p class="role">Senior Lead</p>
          </div>
          <span class="material-symbols-outlined profile-expand">unfold_more</span>
        </div>
      </div>
    </aside>
  `,
  styleUrl: './dashboard-sidebar.component.scss'
})
export class DashboardSidebarComponent {
  readonly navItems = input.required<readonly DashboardNavItem[]>();
  readonly collapsed = input(false);
}
