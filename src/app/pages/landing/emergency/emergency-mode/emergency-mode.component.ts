import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {IonButton, IonIcon} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {alertCircleOutline} from 'ionicons/icons';

@Component({
  selector: 'app-emergency-mode',
  templateUrl: './emergency-mode.component.html',
  styleUrls: ['./emergency-mode.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, RouterLink],
})
export class EmergencyModeComponent {
  constructor() {
    // Add the specific icon used in the template to the Ionic icon registry,
    // following the pattern established in your other components.
    addIcons({alertCircleOutline});
  }
}
