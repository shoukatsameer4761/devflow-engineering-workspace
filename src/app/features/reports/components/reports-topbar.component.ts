import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/theme.service';

@Component({
  selector: 'app-reports-topbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reports-topbar.component.html',
  styleUrl: './reports-topbar.component.scss'
})
export class ReportsTopbarComponent {
  protected readonly themeService = inject(ThemeService);

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
