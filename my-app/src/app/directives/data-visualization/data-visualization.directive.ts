import { Directive, Input, HostBinding, OnInit  } from '@angular/core';

@Directive({
  selector: '[appDataVisualization]'
})
export class DataVisualizationDirective implements OnInit{

  @Input('appDataVisualization') public data!: Date;
  

  @HostBinding('class') className: string = '';

  ngOnInit(): void {
    console.log(this.data);
    const currendData = new Date();
    if (currendData.getTime() > this.data.getTime() && (currendData.getTime() - this.data.getTime()) / 86400000 < 14) {
      this.className = 'freshCourse';
    }
    if (currendData.getTime() < this.data.getTime()) {
      this.className = 'upcomingCourse';
    }
  }

  

}
