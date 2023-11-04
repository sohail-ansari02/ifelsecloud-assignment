import { Component } from '@angular/core';
import { faBars, faCube, faBarChart, faSquarePlus, faCheck, faGear, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {

  ICON: any = {
    faBars,
    faCube,
    faBarChart,
    faSquarePlus,
    faCheck, faGear, faDownload
  }


}
