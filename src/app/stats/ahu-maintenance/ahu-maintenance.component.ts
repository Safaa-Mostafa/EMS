import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ahu-maintenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ahu-maintenance.component.html',
  styleUrl: './ahu-maintenance.component.css'
})
export class AhuMaintenanceComponent {
  maintenanceData: any[] = [
    { floor: 'GR. Floor', runningHour: '320 h', fireAlarm: 'Normal', maintenanceDate: '18-7-2024' },
    { floor: '1st Floor', runningHour: '256 h', fireAlarm: 'Normal', maintenanceDate: '6-6-2024' },
    { floor: '2nd Floor', runningHour: '256 h', fireAlarm: 'Normal', maintenanceDate: '13-11-2024' },
    { floor: '3rd Floor', runningHour: '256 h', fireAlarm: 'Normal', maintenanceDate: '19-12-2024' }
  ];
}
