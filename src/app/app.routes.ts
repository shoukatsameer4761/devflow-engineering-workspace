import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'dashboard'
	},
	{
		path: '',
		loadComponent: async () =>
			(await import('./layout/app-shell.component')).AppShellComponent,
		children: [
			{
				path: 'dashboard',
				data: { breadcrumb: 'Dashboard' },
				loadComponent: async () =>
					(await import('./features/dashboard/dashboard-page.component')).DashboardPageComponent
			},
			{
				path: 'board',
				data: { breadcrumb: 'Board' },
				loadComponent: async () =>
					(await import('./features/board/board-page.component')).BoardPageComponent
			},
			{
				path: 'issues',
				data: { breadcrumb: 'Issues' },
				children: [
					{
						path: '',
						loadComponent: async () =>
							(await import('./features/issues/issues-page.component')).IssuesPageComponent
					},
					{
						path: ':id/full',
						data: { breadcrumb: ':id' },
						loadComponent: async () =>
							(await import('./features/issues/issue-full-detail-page.component')).IssueFullDetailPageComponent
					}
				]
			},
			{
				path: 'team',
				data: { breadcrumb: 'Team' },
				loadComponent: async () =>
					(await import('./features/team/team-management-page.component')).TeamManagementPageComponent
			},
			{
				path: 'reports',
				data: { breadcrumb: 'Reports' },
				loadComponent: async () =>
					(await import('./features/reports/reports-page.component')).ReportsPageComponent
			}
		]
	},
	{
		path: 'register',
		loadComponent: async () =>
			(await import('./features/register/register-page.component')).RegisterPageComponent
	},
	{
		path: 'login',
		loadComponent: async () =>
			(await import('./features/login/login-page.component')).LoginPageComponent
	},
	{
		path: 'reset-password',
		loadComponent: async () =>
			(await import('./features/reset-password/reset-password-page.component')).ResetPasswordPageComponent
	}
];
