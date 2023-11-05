import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-user-registration',
  templateUrl: './new-user-registration.component.html',
  styleUrls: ['./new-user-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewUserRegistrationComponent {
  ;
  columns = ['Name', 'Age', 'Country'];
  data = [
    { Name: 'John', Age: 30, Country: 'USA' },
    { Name: 'Alice', Age: 25, Country: 'Canada' },
    { Name: 'Bob', Age: 35, Country: 'UK' },
    { Name: 'John', Age: 30, Country: 'USA' },
    { Name: 'Alice', Age: 25, Country: 'Canada' },
    { Name: 'Bob', Age: 35, Country: 'UK' },
    { Name: 'John', Age: 30, Country: 'USA' },
    { Name: 'Alice', Age: 25, Country: 'Canada' },
    { Name: 'Bob', Age: 35, Country: 'UK' },
    { Name: 'John', Age: 30, Country: 'USA' },
    { Name: 'Alice', Age: 25, Country: 'Canada' },
    { Name: 'Bob', Age: 35, Country: 'UK' },
  ];

}
