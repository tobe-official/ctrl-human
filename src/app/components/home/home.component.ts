import { Component } from '@angular/core';
import {AboutUsComponent} from "../about-us/about-us.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutUsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
