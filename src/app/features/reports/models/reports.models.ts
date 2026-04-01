export interface ReportsNavItem {
  readonly icon: string;
  readonly label: string;
  readonly route?: string;
  readonly active?: boolean;
}

export interface AnalyticsKpi {
  readonly title: string;
  readonly value: string;
  readonly valueColor?: string;
  readonly trendText?: string;
  readonly trendTone?: 'success' | 'danger' | 'muted';
  readonly bars?: readonly number[];
  readonly progress?: number;
  readonly warningId?: string;
}

export interface TeamPerformanceRow {
  readonly name: string;
  readonly completed: string;
  readonly progress: number;
  readonly avatarUrl: string;
  readonly avatarBg: string;
}

export interface PriorityDistributionWeek {
  readonly label: string;
  readonly urgent: number;
  readonly high: number;
  readonly medium: number;
  readonly low: number;
}

export interface SprintTaskRow {
  readonly name: string;
  readonly status: 'Done' | 'Running' | 'Review';
  readonly assigneeName: string;
  readonly assigneeAvatarUrl?: string;
  readonly dueDate: string;
  readonly id: string;
}
