import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chiller-system',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './chiller-system.component.html',
  styleUrl: './chiller-system.component.css'
})
export class ChillerSystemComponent {
value:number=20;
}
