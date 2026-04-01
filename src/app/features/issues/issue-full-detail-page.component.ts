import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getIssueDetailById } from './models/issue-detail.data';

@Component({
  selector: 'app-issue-full-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './issue-full-detail-page.component.html',
  styleUrl: './issue-full-detail-page.component.scss'
})
export class IssueFullDetailPageComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly issueId = computed(() => this.route.snapshot.paramMap.get('id') ?? 'DF-101');
  protected readonly detail = computed(() => getIssueDetailById(this.issueId()));
}
