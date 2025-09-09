import {Component} from '@angular/core';
import {IonButton, IonIcon} from '@ionic/angular/standalone';
import {RouterLink} from '@angular/router';
import {arrowForward} from 'ionicons/icons';
import {addIcons} from 'ionicons';

@Component({
  selector: 'app-about-teach-mode',
  templateUrl: './about-teach-mode.component.html',
  styleUrls: ['./about-teach-mode.component.scss'],
  standalone: true, // needed to work with AboutComponent imports
  imports: [IonButton, IonIcon, RouterLink],
})
export class AboutTeachModeComponent {
  constructor() {
    addIcons({arrowForward}); // make sure arrow icon works
  }
}
