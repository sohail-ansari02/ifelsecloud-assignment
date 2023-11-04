import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  @Input() icon!: IconProp; 
  @Input() status: 'warn' | 'success' = 'success'; 

}
