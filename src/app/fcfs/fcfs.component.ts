import { Component, OnInit } from '@angular/core';

import { ProcessService } from '../process/process.service';

@Component({
  selector: 'sch-fcfs',
  templateUrl: './fcfs.component.html',
  styleUrls: ['./fcfs.component.css']
})
export class FcfsComponent implements OnInit {

  constructor(private processService: ProcessService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.processService.destroy();
  }

}
