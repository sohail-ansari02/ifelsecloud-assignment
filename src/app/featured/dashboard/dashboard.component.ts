import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  columns = ['Name', 'Age', 'Country'];
  data = [
    { Name: 'John', Age: 30, Country: 'USA' },
    { Name: 'Alice', Age: 25, Country: 'Canada' },
    { Name: 'Bob', Age: 35, Country: 'UK' },
  ];

}
