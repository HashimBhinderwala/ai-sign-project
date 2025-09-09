import {Component} from '@angular/core';
import {EmergencyModeComponent as EmergencyModeContentComponent} from './emergency-mode/emergency-mode.component';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss'],
  standalone: true,
  imports: [
    // This component's template will only contain the <app-emergency-mode> tag.
    // Therefore, this is the only import required for it to function correctly,
    // mirroring the structure of your about.component.
    EmergencyModeContentComponent,
  ],
})
export class EmergencyComponent {}
