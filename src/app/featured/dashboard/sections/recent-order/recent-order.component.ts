import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentOrderComponent {

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
