import { CdkDragDrop, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { BoardColumnComponent } from './components/board-column.component';
import { BoardSubheaderComponent } from './components/board-subheader.component';
import { BoardColumn, BoardTaskCard } from './models/board.models';

@Component({
  selector: 'app-board-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkDropListGroup, BoardSubheaderComponent, BoardColumnComponent],
  templateUrl: './board-page.component.html',
  styleUrl: './board-page.component.scss'
})
export class BoardPageComponent {
  protected readonly columns = signal<BoardColumn[]>([
    {
      id: 'todo',
      name: 'Todo',
      accent: '#9898B0',
      count: '3',
      cards: [
        {
          id: 'todo-1',
          title: 'Refactor authentication middleware for OAuth2 support',
          description: 'Update the security layer to handle new tokens...',
          priority: 'high',
          tags: ['API', '+2'],
          codeTask: true,
          iconCounts: { attachments: '4', comments: '12' },
          dateLabel: 'Oct 24',
          avatarUrls: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBZJ35ctNCbwp119J761zd1KqW0eU_BuCtuLG8EaV7Em2II3lK87Hv1HF3_b4JYYztYbP4pnmz_Qp39P2oUXCJAJ7peo14AgoDeVuubey7JaXMk6y8jvgwcloQa1yza-dORkRCzxHm2YovZt88GEeA4bow2JKG9eYXBA2nHX1wsGDcvHjCVRtDdoH8PJUx1TxbnxdSvmhVD-NYDvA-3AGJ04HTDy4zzR4CuNds2fKjGZDyhEINiZcsS6mULa_JAxSxJgrlGZJoh61lI'
          ]
        },
        {
          id: 'todo-quick-create',
          title: '',
          priority: 'medium',
          inQuickCreate: true
        }
      ]
    },
    {
      id: 'in-progress',
      name: 'InProgress',
      accent: '#185FA5',
      count: '2',
      cards: [
        {
          id: 'in-progress-1',
          title: 'Fix memory leak in websocket connection handler',
          priority: 'urgent',
          tags: ['Bug'],
          codeTask: true,
          dateLabel: 'Yesterday',
          overdue: true,
          avatarUrls: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDg_-5w3GRvf-oo_5PY3eB8w08YDhHEtlJ3FtL0I0lMcxK792jd10ZxymT4AnKeQqSvYch2g2SpAqOo_NN3jvsyqzQ8KFxeU0MW1rcI1D0PWA0MDjObbvUIp6pJ4Bg0XBZDFP1m_1A0ZlRp8sPeGRbdXKHMEaQeTYx14Wab7tHpIspdf-driA1L2hGlZG9Hk9B8ZoEJyxIAaPJglheLxbEtYZFfXlKBEWTpfePwIGBCZ0eutly8IQmvRdQtTm1Avm23LVkE1dIErqRz',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBXwEBv4XLMHNdEsUDbTxv_aaHbMIEGfkf6Pv4EoTCA0EsSwYza1VRDnpVOtiVYtBS3WdJ-HtlwR2jSeLFCOxDS-bypOOf3hWJ_x_0dydP_r6MwLO7JQWX5z6Mz0JfDqPWvOuw6Jw2GfQ5bLycfCX6wwAGdtuWAoOe0m-3upoPMJO0DONznu8UC1MkONNevHWQ3JrtdfEQlWIM1X5D5P9O3nLGkAaGFbawuGlpp-MFtVwVslQmpmLsVdgOwlnItvOQwMowsTZV5Q9B_'
          ]
        },
        {
          id: 'in-progress-2',
          title: 'Implement data pagination for /v1/users endpoint',
          priority: 'medium',
          codeTask: true,
          dateLabel: 'Today',
          avatarUrls: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCSMen4PiLMt8srYCu_-BJ93KEyReCM9UTwsCvGBkS4XxjJOTA1ZM1lYADb-0Gz1fztCzGSgB5K3RQ7lAUkBFNBbrGMOC88ExAw0-sPw59U_ZZrowIIRXO82GqYIJven4u0i-1mmJmIUqbFBE8INUqg2_aqjlZACbOC5XCnLxIOK5PcpaQup9qfcepskT55aw9_jdJFynFRxN4y6OJAKHWm0RIcwc8C6UlMZjjkE_jvrJjCjpzSgov9lrrIZ_8EDwTIyZEqAI81U38U'
          ]
        }
      ]
    },
    {
      id: 'in-review',
      name: 'InReview',
      accent: '#BA7517',
      count: '1',
      cards: [
        {
          id: 'in-review-1',
          title: 'Update swagger documentation for new endpoints',
          priority: 'low',
          codeTask: true,
          dateLabel: 'Oct 30',
          dragging: true,
          avatarUrls: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDszKqMbMfF93PGr4fKRjSdFwIxtoeasqyXLYf0Re8ChqAkWiMV2UlYhCEOyx2saau4-TKmuBCJRvOskFC49nAbOTnvUQ1trUeaGDMOE8aVPAN3D-aAbwWGzMO-L2oxCbjKC3nwExKNp5Mo-MzwoURWdlSL-P-J_DsKUr3Y6UqM58SEiIsDZNFW2C-4-s19lLs-rIGJ-V19mrmP1M6tc9vPai3kviFQsIcG2NJg_of0k7B1xa8BUo9FQiZNdkqy4QqwZ0cvhl4OMAQq'
          ]
        }
      ]
    },
    {
      id: 'done',
      name: 'Done',
      accent: '#1D9E75',
      count: '8',
      faded: true,
      cards: [
        {
          id: 'done-1',
          title: 'Set up CI/CD pipeline with GitHub Actions',
          priority: 'low',
          codeTask: true,
          done: true,
          dateLabel: '✓',
          avatarUrls: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAErYBbU8wSszJQUenfUd4RiNMmVi7chIosSMjDD1TjuKGHXtd3OfLqljT-Yk-WwbGJxK0MLyqrVStj6N7g84_r4xcRXOYots46Aw7ZqoxLJ8nlpi0pAyGYB1N6qMkQx2apmV7YulAp34SA-Y38j22kFYdJSEMD83UhlLpmnUkcJL5jaFS5CTD9jyKREpqGm3qnLvSzpfdtky8rR5yJwdVW2KqhrR4pQ1_VP3VPjxJk-dZqapp1_y5CbKToSFHZGecOfhvuF7vN9f6L'
          ]
        },
        {
          id: 'done-2',
          title: 'Database schema design for v2 migrations',
          priority: 'medium',
          codeTask: true,
          done: true,
          dateLabel: '✓',
          avatarUrls: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBfZV9Pz39EvOVmc8WTYBr4S9ZatQfm2KOv5OZQbV_nWQtV2618IJnhfeF4Xz-rQ6GZZFoRWrhQZAF1B2vHTE3CvRf3-65sN-2n0pJz3I5bXccS11rrAZ9fIjc9Xc7VvskFaANUnBdkJdPAij_SgESUACRsDVguCv-FvBYPtfVWf1NkeaTSJ0OHKmAGIo1Tt5KRygI-Ltoaf1Wzn65iYAUfRnSJ7MCmbgmKDiTzu0pi3oqyHyUz_Lam_BByzrOchtH0MkOwvyla2Oa7'
          ]
        }
      ]
    }
  ]);

  protected readonly dropListIds = computed(() => this.columns().map((column) => column.id));

  protected onCardDrop(event: CdkDragDrop<BoardTaskCard[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.columns.update((columns) => [...columns]);
      return;
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    this.columns.update((columns) => [...columns]);
  }
}
