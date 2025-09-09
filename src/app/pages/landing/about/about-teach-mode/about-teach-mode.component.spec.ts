import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AboutTeachModeComponent} from './about-teach-mode.component';

describe('AboutTeachModeComponent', () => {
  let component: AboutTeachModeComponent;
  let fixture: ComponentFixture<AboutTeachModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTeachModeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeachModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
