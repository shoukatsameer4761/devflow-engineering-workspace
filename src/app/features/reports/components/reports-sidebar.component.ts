import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ReportsNavItem } from '../models/reports.models';

@Component({
  selector: 'app-reports-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './reports-sidebar.component.html',
  styleUrl: './reports-sidebar.component.scss'
})
export class ReportsSidebarComponent {
  readonly navItems = input.required<readonly ReportsNavItem[]>();
}
