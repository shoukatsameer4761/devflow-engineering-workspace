import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PriorityDistributionWeek, TeamPerformanceRow } from '../models/reports.models';

@Component({
  selector: 'app-reports-analytics-charts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reports-analytics-charts.component.html',
  styleUrl: './reports-analytics-charts.component.scss'
})
export class ReportsAnalyticsChartsComponent {
  readonly performance = input.required<readonly TeamPerformanceRow[]>();
  readonly distribution = input.required<readonly PriorityDistributionWeek[]>();
}
