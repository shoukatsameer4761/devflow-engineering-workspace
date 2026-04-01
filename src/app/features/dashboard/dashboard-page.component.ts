import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardActivityFeedComponent } from './components/dashboard-activity-feed.component';
import { DashboardBoardPreviewComponent } from './components/dashboard-board-preview.component';
import { DashboardKpiMetricsComponent } from './components/dashboard-kpi-metrics.component';
import { DashboardProjectsOverviewComponent } from './components/dashboard-projects-overview.component';
import { DashboardTaskListComponent } from './components/dashboard-task-list.component';
import {
  ActivityItem,
  BoardColumn,
  KpiMetric,
  ProjectProgress,
  TaskItem
} from './models/dashboard.models';

@Component({
  selector: 'app-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DashboardKpiMetricsComponent,
    DashboardTaskListComponent,
    DashboardActivityFeedComponent,
    DashboardProjectsOverviewComponent,
    DashboardBoardPreviewComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  protected readonly metrics: readonly KpiMetric[] = [
    {
      label: 'Total tasks',
      value: '48',
      accent: '#0D0D1A',
      icon: 'check_box',
      chipBg: '#EEEDFE',
      sparkline: 'M0 25 Q 10 15, 20 20 T 40 10 T 60 18 T 80 5 T 100 15'
    },
    {
      label: 'In progress',
      value: '12',
      accent: '#185FA5',
      icon: 'pending',
      chipBg: '#E6F1FB',
      trendIcon: 'arrow_upward',
      trendText: '+3 since yesterday'
    },
    {
      label: 'Overdue',
      value: '4',
      accent: '#E24B4A',
      icon: 'report_problem',
      chipBg: '#FCEBEB',
      trendIcon: 'error',
      trendText: 'Needs attention'
    },
    {
      label: 'Completed',
      value: '31',
      accent: '#1D9E75',
      icon: 'task_alt',
      chipBg: '#E8F7EF',
      progress: 65
    }
  ];

  protected readonly tasks: readonly TaskItem[] = [
    {
      title: 'Fix rendering lag on Safari mobile',
      priorityColor: '#E24B4A',
      tagLabel: 'MOBILE-UI',
      tagBg: '#dedcff',
      tagColor: '#60607e',
      dueDate: 'Oct 24',
      assignee: 'AR',
      assigneeBg: '#e3dfff'
    },
    {
      title: 'Update authentication docs',
      priorityColor: '#683500',
      tagLabel: 'DOCS',
      tagBg: '#e8e8ec',
      tagColor: '#474553',
      dueDate: 'Oct 26',
      assignee: 'JB',
      assigneeBg: '#e2e2e6'
    },
    {
      title: 'Refactor Tailwind config for v4',
      priorityColor: '#1D9E75',
      tagLabel: 'CORE',
      tagBg: '#e3dfff',
      tagColor: '#3f35a3',
      dueDate: 'Oct 28',
      assignee: 'AR',
      assigneeBg: '#e3dfff'
    },
    {
      title: 'Database migration for user settings',
      priorityColor: '#E24B4A',
      tagLabel: 'DB-API',
      tagBg: '#e8e8ec',
      tagColor: '#474553',
      dueDate: 'Nov 01',
      assignee: 'SM',
      assigneeBg: '#dbeafe'
    }
  ];

  protected readonly activities: readonly ActivityItem[] = [
    {
      actor: 'Sameer',
      action: 'moved',
      target: 'Fix bug',
      timeAgo: '2h ago',
      avatarImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDTpNg8F7i9wRlmq8SYZDV797mGS4-lKLlowJDgf5e9sKRD8UtoAr455ek49MCkXOrVgLf99MY8X-0Ojl46OEUHvFV5VNba3H34Zu33QQaFE0LTbPptqgHxpX86AlQYEAaqnbhYinUm7Fd_94m4K_xPe3TtL_xQfS_NWR5dW2NPSmUX0SQrvGO_ufDm_wlFx59U7CeYJ9XyjGuunkQej2QKOwoFMHKUWDH8al_WGd8Dim8VAGMuKhj7xRIKrjZd0J7avO_l3QR2frfD'
    },
    {
      actor: 'Alex',
      action: 'commented on',
      target: 'UI Audit',
      timeAgo: '4h ago',
      avatarInitials: 'AR',
      avatarBg: '#e3dfff'
    },
    {
      actor: 'Julia',
      action: 'added',
      target: 'API Specs',
      timeAgo: '1d ago',
      avatarImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDlOpSi9amnLrDBFxvvOqJboldT1r7AJS9LT2EmWWKygQdUUl9XnFukXq-CgyGefOUH0bVHIUwIShTZiXdYl75bxRF1sHlHn-1sjbLrgqF2Cmf3LElcR3d7INxs2WviFLkFHk_pinAMAOMS3ns0CcFGbWxQKgm9UT6ve-bl8ibJidYHoAMqXjK-57GjuzWUp7QUsLAno_SUFpFZE8JPAFom7lVwUqXMbhhzMVGsQOXrNijaYafgbQmmaalHRH2Z-8MKSUNpPDdicvb7'
    }
  ];

  protected readonly projects: readonly ProjectProgress[] = [
    { name: 'Mobile App V2', tasks: '14 tasks', color: '#3b309e', progress: 80 },
    { name: 'DevFlow CRM', tasks: '8 tasks', color: '#1D9E75', progress: 35 },
    { name: 'Admin Panel', tasks: '22 tasks', color: '#683500', progress: 60 }
  ];

  protected readonly boardColumns: readonly BoardColumn[] = [
    {
      title: 'Todo',
      count: '12',
      countBg: '#e2e8f0',
      countColor: '#475569',
      cards: [
        { title: 'Fix modal overflow', date: 'Oct 28', assignee: 'AR', assigneeBg: '#e3dfff' },
        { title: 'Analytics event tracking', date: 'Oct 29', assignee: 'JU', assigneeBg: '#e2e8f0' }
      ]
    },
    {
      title: 'In Progress',
      count: '5',
      countBg: '#dbeafe',
      countColor: '#185FA5',
      cards: [
        { title: 'Refactor auth hooks', date: 'Oct 26', assignee: 'AR', assigneeBg: '#e3dfff', leftAccent: true },
        { title: 'Design system audit', date: 'Oct 27', assignee: 'SM', assigneeBg: '#dbeafe', leftAccent: true }
      ]
    },
    {
      title: 'In Review',
      count: '3',
      countBg: '#ffedd5',
      countColor: '#683500',
      cards: [
        { title: 'Update landing assets', date: 'Oct 25', reviewerInitials: ['JU', 'AR'] }
      ]
    },
    {
      title: 'Done',
      count: '24',
      countBg: '#dcfce7',
      countColor: '#1D9E75',
      cards: [{ title: 'Sprint planning Q4', assignee: 'AR', assigneeBg: '#e3dfff', done: true }]
    }
  ];
}
