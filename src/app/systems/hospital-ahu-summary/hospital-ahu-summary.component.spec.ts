import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAhuSummaryComponent } from './hospital-ahu-summary.component';

describe('HospitalAhuSummaryComponent', () => {
  let component: HospitalAhuSummaryComponent;
  let fixture: ComponentFixture<HospitalAhuSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalAhuSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalAhuSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
