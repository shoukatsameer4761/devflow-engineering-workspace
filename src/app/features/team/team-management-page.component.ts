import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TeamInviteSectionComponent } from './components/team-invite-section.component';
import { TeamMembersTableComponent } from './components/team-members-table.component';
import { TeamRolePermissionsComponent } from './components/team-role-permissions.component';
import {
  PendingInvite,
  RolePermissionRow,
  TeamMember
} from './models/team-management.models';

@Component({
  selector: 'app-team-management-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TeamInviteSectionComponent,
    TeamMembersTableComponent,
    TeamRolePermissionsComponent
  ],
  templateUrl: './team-management-page.component.html',
  styleUrl: './team-management-page.component.scss'
})
export class TeamManagementPageComponent {
  protected readonly pendingInvite: PendingInvite = {
    email: 'sarah.j@techflow.io',
    role: 'Member',
    sentAgo: '2 days ago'
  };

  protected readonly members: readonly TeamMember[] = [
    {
      name: 'James Dalton',
      email: 'james@devflow.io',
      role: 'Owner',
      joinedAt: 'Oct 10, 2024',
      lastActive: 'Today',
      online: true,
      isCurrentUser: true,
      initials: 'JD'
    },
    {
      name: 'Sameer Shoukat',
      email: 'sameer@devflow.io',
      role: 'Admin',
      joinedAt: 'Jan 12, 2025',
      lastActive: 'Today',
      online: true,
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDzvTcMlRNfglvs91rvoK9N_z1RuKxStfznXFTAFkuFAeHBgreIz82063EU2g4iCO6lgTfyGX_tYH9ZXiBBJJZj5GBkTnML7YS5RYezqAZ2u1k96nlFi1whWwb7l6Ck_rs_SVsiNjgSL_Avp884z-5jRx16aAHzvL4mCEWpEDogb5d-LoaVV1_e99f7t6ur6bjjQqlUr62Ifr7Favj4r6qfg83hzmhdnOgWspvYV3J-_r0gzLs089tW0j8bcLGkniglBavyoCjsZ59K'
    },
    {
      name: 'Elena Laine',
      email: 'elena.l@devflow.io',
      role: 'Member',
      joinedAt: 'Dec 05, 2024',
      lastActive: '3 days ago',
      online: false,
      initials: 'EL'
    },
    {
      name: 'Monica Hall',
      email: 'monica@devflow.io',
      role: 'Viewer',
      joinedAt: 'Feb 01, 2025',
      lastActive: 'Today',
      online: true,
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCVzaxx01cFuU4X20SeypRSzs16yjThuBJNU7ZRb3zXs8rcEpoZAOBLXPXqhVTXjeR1hsm5XpRkoU4VPmGto_NbiLYfYEwnOSfjQNeN0ts9WFc3WjqJLOkHzlERefQpwUCl6kc1A8Jk_BDumUObFV1_DIZ-0yuu7lqmNwiyVVH2H13DKy-hoPyDclOkbaAA-tOv213FeYT8GDbwchuD2AlwH2KW9t4YuzKa-MA52R9I6zFUhctK-PJiny7rhmMEAo1LNfkXGR3WO3vt'
    }
  ];

  protected readonly permissionRows: readonly RolePermissionRow[] = [
    {
      action: 'View issues & board',
      viewer: true,
      member: true,
      admin: true,
      owner: true
    },
    {
      action: 'Create/Edit content',
      viewer: false,
      member: true,
      admin: true,
      owner: true
    },
    {
      action: 'Manage members',
      viewer: false,
      member: false,
      admin: true,
      owner: true
    },
    {
      action: 'Billing & Workspace delete',
      viewer: false,
      member: false,
      admin: false,
      owner: true
    }
  ];
}
