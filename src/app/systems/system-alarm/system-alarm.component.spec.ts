import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAlarmComponent } from './system-alarm.component';

describe('SystemAlarmComponent', () => {
  let component: SystemAlarmComponent;
  let fixture: ComponentFixture<SystemAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemAlarmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
