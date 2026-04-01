import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SprintTaskRow } from '../models/reports.models';

@Component({
  selector: 'app-reports-sprint-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reports-sprint-progress.component.html',
  styleUrl: './reports-sprint-progress.component.scss'
})
export class ReportsSprintProgressComponent {
  readonly tasks = input.required<readonly SprintTaskRow[]>();
}
