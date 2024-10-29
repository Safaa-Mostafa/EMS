import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';

import { HeaderComponent } from './shared/header/header.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FloorOverviewComponent } from './overview/floor-overview/floor-overview.component';
import { CarbonFootprintComponent } from './stats/carbon-footprint/carbon-footprint.component';
import { TemperatureComponent } from './stats/temperature/temperature.component';
import { AhuMaintenanceComponent } from './stats/ahu-maintenance/ahu-maintenance.component';
import { ChillerSystemComponent } from "./systems/chiller-system/chiller-system.component";
import { HospitalAhuSummaryComponent } from "./systems/hospital-ahu-summary/hospital-ahu-summary.component";
import { OccupancyComponent } from "./systems/occupancy/occupancy.component";
import { SystemAlarmComponent } from "./systems/system-alarm/system-alarm.component";
import { AhuVisualizationComponent } from "./ahu/ahu-visualization/ahu-visualization.component";
import { FloorAhuStatusComponent } from "./ahu/floor-ahu-status/floor-ahu-status.component";
import { TempHumidityGraphComponent } from "./ahu/temp-humidity-graph/temp-humidity-graph.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TableModule, HeaderComponent, SidebarComponent, FloorOverviewComponent, CarbonFootprintComponent, TemperatureComponent, AhuMaintenanceComponent, ChillerSystemComponent, HospitalAhuSummaryComponent, OccupancyComponent, SystemAlarmComponent, AhuVisualizationComponent, FloorAhuStatusComponent, TempHumidityGraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

