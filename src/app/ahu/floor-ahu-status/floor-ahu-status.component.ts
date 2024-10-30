import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-floor-ahu-status',
  standalone: true,
  imports: [ChartModule, CardModule,BadgeModule],
  templateUrl: './floor-ahu-status.component.html',
  styleUrl: './floor-ahu-status.component.css'
})
export class FloorAhuStatusComponent {
  floors = [
    { name: 'Ground Floor', on: 7, off: 3 },
    { name: 'First Floor', on: 4, off: 6 },
    { name: 'Second Floor', on: 8, off: 2 },
    { name: 'Third Floor', on: 6, off: 4 }
  ];
  
}
