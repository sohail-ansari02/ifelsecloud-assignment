import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavButtonComponent {
  @Input() icon!: IconProp;

}
