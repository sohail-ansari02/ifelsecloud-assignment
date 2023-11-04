import { Component } from '@angular/core';
import { faMessage, faBell } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faMessage = faMessage;
  faBell = faBell;
}
