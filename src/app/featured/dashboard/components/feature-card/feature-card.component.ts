import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FeatureCard } from '../../interfaces/feature-card';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureCardComponent {
  
  @Input() data!: FeatureCard;
  @Input() special: boolean = false;
  faMusic = faMusic;

}
