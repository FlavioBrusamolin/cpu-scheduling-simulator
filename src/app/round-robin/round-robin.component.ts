import { Component, OnInit } from '@angular/core';

import { ProcessService } from '../process/process.service';

@Component({
  selector: 'sch-round-robin',
  templateUrl: './round-robin.component.html',
  styleUrls: ['./round-robin.component.css']
})
export class RoundRobinComponent implements OnInit {

  constructor(private processService: ProcessService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.processService.destroy();
  }

}
