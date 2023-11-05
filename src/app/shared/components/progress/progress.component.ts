import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  @Input(
    {
      transform: (value: number | string) => parseInt(<string>value)*0.01
    }
  ) value: number = 0;

  ngOnInit(): void {
    console.log('vaas', this.value);
    
  }
}
