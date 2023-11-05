import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableColumn } from 'src/app/shared/interface/table-column';
import { NewUser } from '../../interfaces/new-user';

@Component({
  selector: 'app-new-user-registration',
  templateUrl: './new-user-registration.component.html',
  styleUrls: ['./new-user-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewUserRegistrationComponent {
  @Input() newUsers: NewUser[] = []
  columns: TableColumn[] = [
    {
      name: 'user',
      field: ''
    },
    {
      name: 'progress',
      field: 'progress'
    },
    {
      name: 'action',
      field: ''
    },
  ];

}
