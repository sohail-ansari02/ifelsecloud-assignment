import {  Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent  {
  @Input(
    {
      transform: (value: number | string) => parseInt(<string>value)
    }
  ) value: number = 0;

}
