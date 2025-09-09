import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EmergencyModeComponent} from './emergency-mode.component';
import {provideIonicAngular} from '@ionic/angular/standalone';
import {provideRouter} from '@angular/router';

describe('EmergencyModeComponent', () => {
  let component: EmergencyModeComponent;
  let fixture: ComponentFixture<EmergencyModeComponent>;

  beforeEach(async () => {
    // For standalone components, they are added to the 'imports' array.
    // We also provide necessary dependencies like Ionic and the Router.
    await TestBed.configureTestingModule({
      imports: [EmergencyModeComponent],
      providers: [provideIonicAngular(), provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
