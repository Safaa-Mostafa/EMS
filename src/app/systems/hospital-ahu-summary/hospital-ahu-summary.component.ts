import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-hospital-ahu-summary',
  standalone: true,
  imports: [TableModule],
  templateUrl: './hospital-ahu-summary.component.html',
  styleUrl: './hospital-ahu-summary.component.css'
})
export class HospitalAhuSummaryComponent {
  floors = [
    { name: 'Ground Floor', inpatient: 141, outpatient: 520 },
    { name: 'First Floor', inpatient: 231, outpatient: 611 },
    { name: 'Second Floor', inpatient: 267, outpatient: 489 },
    { name: 'Third Floor', inpatient: 154, outpatient: 399 }
  ];
}
