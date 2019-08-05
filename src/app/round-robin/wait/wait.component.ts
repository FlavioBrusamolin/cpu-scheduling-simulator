import { Component, OnInit } from '@angular/core';

import { ProcessService } from '../../process/process.service';

@Component({
  selector: 'sch-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css']
})
export class WaitComponent implements OnInit {

  waitingProcesses: any[] = [];

  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.listWaitingProcess();
  }

  listWaitingProcess() {
    this.waitingProcesses = this.processService.listWaitingProcesses();
  }

}
