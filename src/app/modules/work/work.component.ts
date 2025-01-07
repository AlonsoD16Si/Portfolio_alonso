import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
currentDate: string = '';

constructor (){}

ngOnInit(): void{
  setInterval(()=>{
    const now = new Date();
    this.currentDate = now.toLocaleTimeString('en-US', { hour12: true });

  },  1000);
}
}
