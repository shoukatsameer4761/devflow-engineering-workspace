import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AnalyticsKpi } from '../models/reports.models';

@Component({
  selector: 'app-reports-kpi-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reports-kpi-row.component.html',
  styleUrl: './reports-kpi-row.component.scss'
})
export class ReportsKpiRowComponent {
  readonly metrics = input.required<readonly AnalyticsKpi[]>();
}
