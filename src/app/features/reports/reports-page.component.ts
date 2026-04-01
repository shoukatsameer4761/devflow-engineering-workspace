import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReportsAnalyticsChartsComponent } from './components/reports-analytics-charts.component';
import { ReportsKpiRowComponent } from './components/reports-kpi-row.component';
import { ReportsSprintProgressComponent } from './components/reports-sprint-progress.component';
import {
  AnalyticsKpi,
  PriorityDistributionWeek,
  SprintTaskRow,
  TeamPerformanceRow
} from './models/reports.models';

@Component({
  selector: 'app-reports-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReportsKpiRowComponent,
    ReportsAnalyticsChartsComponent,
    ReportsSprintProgressComponent
  ],
  templateUrl: './reports-page.component.html',
  styleUrl: './reports-page.component.scss'
})
export class ReportsPageComponent {
  protected readonly metrics: readonly AnalyticsKpi[] = [
    {
      title: 'TASKS COMPLETED',
      value: '48',
      trendText: '+33%',
      trendTone: 'success',
      bars: [34, 50, 64, 52, 76, 100]
    },
    {
      title: 'AVG COMPLETION TIME',
      value: '3.2d',
      valueColor: 'var(--color-tertiary)',
      trendText: '22% faster',
      trendTone: 'success'
    },
    {
      title: 'TEAM VELOCITY',
      value: '12',
      valueColor: 'var(--color-primary)',
      trendText: '+3 tasks/wk',
      trendTone: 'muted',
      progress: 75
    },
    {
      title: 'OPEN BLOCKERS',
      value: '2',
      valueColor: 'var(--color-error)',
      trendText: 'Needs attention',
      trendTone: 'danger',
      warningId: 'CRITICAL_PATH_ALERT_ID_094'
    }
  ];

  protected readonly performanceRows: readonly TeamPerformanceRow[] = [
    {
      name: 'Jane Doe',
      completed: '18',
      progress: 90,
      avatarBg: '#e0e7ff',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUUxoYTQgmyEvy-9XFvTYMRgOEeL_bjM7lPipHOWRMiI0JTcr5TsYzbAD_qHnKfd6lEnQKHKfIJNhyWXKIDKhdNgZu9Rv_DT5c6qxOuNePpqzpGyot129Lg5oK3Izc-mN63fTClmHXjQ8m8T5755cUC979ArC5-msgl3PXugRt70mZ-HLJy0LuPFspaAVUZvDZn40cKS8mB3FPqtYPCnShZrg0DGax6k-1LQR2lbybcwELrE1Kpb0XpTNSX_ZG6LDzaFgB6zq4I0bd'
    },
    {
      name: 'Mike Smith',
      completed: '14',
      progress: 70,
      avatarBg: '#fed7aa',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBqr1EUFdGKJbwRJnQ9M7jfT_SsLpIwqlfqIZctiVX1eu6AyK-JJ6WOmsDsuuXMefM0yi5YgbtZw6UROrZpTm_vWXbH7Y_iMBwJhHyGmC5jNf2elFPWEPXYTyvEH703jSIUczetfMgypwybVUMs-ehyvx65VT32H1Xw_L4MML9AL6GWHg-wMDRqCBLGhochzpa0PD0VqRh7_pOruwakwlkhVzkn3IBmj0jtRVctYfTxdwLrVjz7M7XJlLr60aLWDTOHRuFpqKJvvOzP'
    },
    {
      name: 'Anna Lee',
      completed: '11',
      progress: 55,
      avatarBg: '#a7f3d0',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCJMqluMlca9E63gb1Z1gIETJbKsmDUTlQr8Xn2FZ-ta2t79z4Zje0KaLxpNofOctd108_Cdw1rzgMRqHdiwvqJvtc5zSzkAEzWJHKj0nayV7VV9_oftIVcQRJVwc0RHz7mJdbQA895_d2q7TzyvvtxOFKBQZTYPXRuRbYUdR-SADS2yaKlkcNJzp7Gzl9a6LhBw5xHTT8bId8Jo1z6TiDvaPJGa0ibOrdJvUZru6NBSWAASUd84oa9J5Eii_ntDOuoM2GPQ0vylNQo'
    }
  ];

  protected readonly distributionByWeek: readonly PriorityDistributionWeek[] = [
    { label: 'W1', urgent: 20, high: 30, medium: 40, low: 10 },
    { label: 'W2', urgent: 15, high: 25, medium: 50, low: 10 },
    { label: 'W3', urgent: 30, high: 20, medium: 40, low: 10 },
    { label: 'W4', urgent: 10, high: 40, medium: 40, low: 10 }
  ];

  protected readonly sprintTasks: readonly SprintTaskRow[] = [
    {
      name: 'Implement Auth Middleware',
      status: 'Done',
      assigneeName: 'Jane Doe',
      assigneeAvatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB9-D446ulE8h2o5VpfRw3IbBsshZ6crleDh7BiIOtTkBu7dcX0KLTzLi1zWCsvfTGDvnIBrCTMSMsiivdpcRcoaWzOd2lLBuGLHiwzLjpZzAHsjlJ_lEibtPOOSQLzfL95kavRiN29U7Oh3kchgy_mpJPbT_j-VcA-7wlCfXfHxpZSHMKryor1JfgitPSxvCPBWNtNjjHSynp6zzToE5eVVH0DeIuQjou_hYRl4AyQazEej3yeyDrDCXxmGsdhvx6iDNPZ2cjj4fiI',
      dueDate: 'Mar 28',
      id: 'DEV-1024'
    },
    {
      name: 'API Endpoint Documentation',
      status: 'Running',
      assigneeName: 'Mike Smith',
      assigneeAvatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD238jKPZvkEQg3qwj0UfvfQ6TZJSVZNtwhcGz_dkVNcsGprME5HuVBAWQfus4hyv9_WKTjcIufdVCMiYicdRaNR8AGscIiqNFUpPh0kyk-DRsGi6-hJLEkDlYZbW630DYrQibFG3Qkr1DD7ZVD3KR9gpnaG2kZKs4ml3T5FzBPkBN5uwaYxO_fvH90SU-QUY9t0K4OpsqEcCWo1RxiuRvLVUx6YDesTFvs0HnXmXCy7mQGqqxWlhXrdH2SBUbSjOR04NpOv_Vvv2M1',
      dueDate: 'Apr 02',
      id: 'DEV-1042'
    },
    {
      name: 'Legacy Database Migration',
      status: 'Review',
      assigneeName: 'Unassigned',
      dueDate: 'Apr 05',
      id: 'DEV-0988'
    }
  ];
}
