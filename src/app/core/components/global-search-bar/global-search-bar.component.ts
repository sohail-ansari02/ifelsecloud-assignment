import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-global-search-bar',
  templateUrl: './global-search-bar.component.html',
  styleUrls: ['./global-search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalSearchBarComponent {

}
