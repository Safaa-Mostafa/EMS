import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorAhuStatusComponent } from './floor-ahu-status.component';

describe('FloorAhuStatusComponent', () => {
  let component: FloorAhuStatusComponent;
  let fixture: ComponentFixture<FloorAhuStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorAhuStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorAhuStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
