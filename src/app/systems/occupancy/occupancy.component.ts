import { Component } from '@angular/core';

@Component({
  selector: 'app-occupancy',
  standalone: true,
  imports: [],
  templateUrl: './occupancy.component.html',
  styleUrl: './occupancy.component.css'
})
export class OccupancyComponent {
  inpatientCount:number=1000;
  outpatientCount:number=3000;
}
