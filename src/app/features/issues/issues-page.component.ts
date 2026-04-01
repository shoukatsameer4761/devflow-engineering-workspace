import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IssueDetailDrawerComponent } from './components/issue-detail-drawer.component';
import { IssuesMetricsComponent } from './components/issues-metrics.component';
import { IssuesTableComponent } from './components/issues-table.component';
import { getIssueDetailById } from './models/issue-detail.data';
import { IssueDetail } from './models/issue-detail.models';
import { IssueMetric, IssueRow } from './models/issue.models';

@Component({
  selector: 'app-issues-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IssuesTableComponent, IssuesMetricsComponent, IssueDetailDrawerComponent],
  templateUrl: './issues-page.component.html',
  styleUrl: './issues-page.component.scss'
})
export class IssuesPageComponent {
  private readonly router = inject(Router);

  protected readonly selectedIssueDetail = signal<IssueDetail | null>(null);

  protected readonly issues: readonly IssueRow[] = [
    {
      id: 'DF-101',
      status: { label: 'IN PROGRESS', tone: 'progress' },
      priority: { label: 'URGENT', tone: 'urgent' },
      title: 'Implement Redis caching for user sessions',
      project: 'Engine',
      assignee: {
        name: 'Jane Doe',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAidF7UYgtHR2DBijjg4CPvs_k5A1LQl897BSe2uyNg_Cmn3b4kqaHbEQ7YAR7yJWca5t0_f68kVzwfS_6I3BR2Uc4BwFT2xssOnTsIbwxf-G-7DFPgEYz8u0j-RTu7kAAxcMdmG65_M8zSXC4JTTS7GKnX3qt2SC-oQwf81oGDAfYvwRfGgfqoMbcfF_h7MUXRpcJhcb3vcX0S9CU--oiNwp0P9n9E4NDJuqbn9pshdE-cisjqvG5ykdx69F62A37tXflNKAUnbS9m'
      },
      createdAt: '2h ago'
    },
    {
      id: 'DF-104',
      status: { label: 'TODO', tone: 'todo' },
      priority: { label: 'HIGH', tone: 'high' },
      title: 'Refactor navigation layout for mobile responsiveness',
      project: 'Design',
      assignee: {
        name: 'A. Miller',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAMOiu6NRxt9W48ZQv74PMKSW5O1wpAbDHtREnLvHHY8iVxOQDlCx32mWvBmtDUkHEm88mMiQPY7QQXyfsZCS6GzKbZ_f34K0IpLLcw3pUC0I1tk6luVQZ5lKY8GtIi5oyZ3digof3hiJiNIZwx4c07zF1LkAoFy-KwRNpFr4orb5WZLJn0MwixoiN2C1_PUyCDTYqj8wLZE2renqgkUeoVDgdZ-s7XvAOUhJ9gkVpyVfQB1lUpdkasa_vEOChybkray4o0ufm7Z4N6'
      },
      createdAt: '5h ago'
    },
    {
      id: 'DF-108',
      status: { label: 'DONE', tone: 'done' },
      priority: { label: 'LOW', tone: 'low' },
      title: 'Update internal documentation for CI/CD pipeline',
      project: 'Engine',
      assignee: {
        name: 'S. Rivers',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBlbEFriuWwXhDJS2Rfs_CNSUWyyS5naulqGrvmaHgYPnBtnlhzgjzyCfpc1uKdtT2KpwQNqExkVC2AO5DDFVP4tO5m3aG1Naz_Ea69851au7J2cLZGirdgcbLNkAKcdImcR9mf-3EMxXoWl97cp5NUVN4aMDqcrxUm9N-texHqtvyPkItZRsXq-9LMKmBj6rzthexAIt5A03zy3EGyJekh85_usaxvpYKecAryfnadI3LFYUO66j8OrLGUFoZb8dnpHh2YdzkaQ3Al'
      },
      createdAt: '1d ago'
    },
    {
      id: 'DF-112',
      status: { label: 'IN PROGRESS', tone: 'progress' },
      priority: { label: 'MEDIUM', tone: 'medium' },
      title: 'API rate limiting for public endpoints',
      project: 'Engine',
      assignee: {
        name: 'B. Knight',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCluFGsMhcuVVGgbkQNsGlZnMNvGyaVgGlA48MBL08hYmM6uk5Pe1ME5rxBMAAVa7Nth5f03O8LE2T0sSzXUo_-8OQ63Z3qqRyeZsnSG3lQsHgzavdpbyWRlB7M8LCsxhy6sKwkVDtJ8jp80nGOLlplKrn7pAm7TIz72_HovAQwHXBc12XeaKr-OeB37oJ3q8qz4dp1r1x9z6CZ6BgcmCPvndA9GF1p_C0MTlHkKueDM1uneFGIS0sy59qHpsh4BMi3bO6oLfm_6HzD'
      },
      createdAt: '3d ago'
    },
    {
      id: 'DF-115',
      status: { label: 'TODO', tone: 'todo' },
      priority: { label: 'HIGH', tone: 'high' },
      title: 'Dark mode color palette refinement',
      project: 'Design',
      assignee: { name: 'Unassigned' },
      createdAt: '4d ago'
    }
  ];

  protected readonly metrics: readonly IssueMetric[] = [
    {
      label: 'Velocity',
      value: '32.4',
      valueSuffix: 'pts/wk',
      note: '+12% from last sprint',
      icon: 'trending_up',
      tone: 'velocity'
    },
    {
      label: 'Open Bugs',
      value: '18',
      note: '4 critical issues',
      icon: 'bug_report',
      tone: 'bugs'
    },
    {
      label: 'Cycle Time',
      value: '2.4',
      valueSuffix: 'days',
      note: '-0.5d improvement',
      icon: 'schedule',
      tone: 'cycle'
    },
    {
      label: 'Deployment',
      value: 'Healthy',
      note: 'Last success 14m ago',
      icon: 'rocket_launch',
      tone: 'deployment'
    }
  ];

  protected openIssueDetails(issue: IssueRow): void {
    this.selectedIssueDetail.set(getIssueDetailById(issue.id));
  }

  protected closeIssueDetails(): void {
    this.selectedIssueDetail.set(null);
  }

  protected openFullIssueDetails(): void {
    const detail = this.selectedIssueDetail();
    if (!detail) {
      return;
    }

    this.selectedIssueDetail.set(null);
    void this.router.navigate(['/issues', detail.id, 'full']);
  }
}
