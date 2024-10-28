import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHumidityGraphComponent } from './temp-humidity-graph.component';

describe('TempHumidityGraphComponent', () => {
  let component: TempHumidityGraphComponent;
  let fixture: ComponentFixture<TempHumidityGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempHumidityGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempHumidityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
