import { Component } from '@angular/core';

import { Header } from '../header';
import { HEADER } from '../mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  header: Header = HEADER

}
