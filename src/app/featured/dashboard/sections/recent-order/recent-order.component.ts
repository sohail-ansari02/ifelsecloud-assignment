import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RecentOrder } from '../../interfaces/recent-order';
import { TableColumn } from 'src/app/shared/interface/table-column';
import { faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentOrderComponent {
  @Input() recentOrder: RecentOrder[] = [];
  faX = faX;
  
  columns: TableColumn[] = [
    {
      name: 'customer',
      field: 'name'
    },
    {
      name: 'product',
      field: 'name'
    },
    {
      name: 'delivery date',
      field: 'delivery_date'
    },
    {
      name: 'status',
      field: 'status',
      align: 'center',
    },
    {
      name: 'tracking no#',
      field: 'tracking_no',
      align: 'center',
    },
    {
      name: 'shipping',
      field: 'shipping',
      align: 'center',
    },
    {
      name: 'action',
      field: ''
    }
  ]

}
