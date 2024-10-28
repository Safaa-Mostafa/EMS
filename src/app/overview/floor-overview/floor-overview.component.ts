import { DropdownModule } from 'primeng/dropdown';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-floor-overview',
  standalone: true,
  imports: [DropdownModule,CardModule,FormsModule],
  templateUrl: './floor-overview.component.html',
  styleUrl: './floor-overview.component.css'
})
export class FloorOverviewComponent {
  floors = [
    { name: 'Ground Floor', power: 450, invoice: 1200 },
    { name: 'First Floor', power: 450, invoice: 1200 },
    { name: 'Second Floor', power: 450, invoice: 1200 },
    { name: 'Third Floor', power: 450, invoice: 1200 }
  ];

  billingOptions = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' }
  ];

  selectedBilling = 'monthly';
}
