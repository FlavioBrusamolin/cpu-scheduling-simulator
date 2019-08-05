import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProcessService } from '../../process/process.service';

@Component({
  selector: 'sch-cpu-fcfs',
  templateUrl: './cpu-fcfs.component.html',
  styleUrls: ['./cpu-fcfs.component.css']
})
export class CpuComponent implements OnInit {

  runningProcess: any;
  timeout: any;

  @Output() finishProcess = new EventEmitter();

  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.startScheduling();
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  startScheduling() {
    this.runningProcess = this.processService.cpuProcess();
    if (this.runningProcess)
      this.executeProcess(this.runningProcess.burst - 1);
    else {
      this.timeout = setTimeout(() => {
        this.startScheduling();
      }, 2000);
    }
  }

  executeProcess(i: number) {
    this.timeout = setTimeout(() => {
      this.runningProcess.burst = i;
      i--;
      if (i >= 0)
        this.executeProcess(i);
      else {
        this.finishProcess.emit(this.runningProcess);
        this.runningProcess = null;
        this.timeout = setTimeout(() => {
          this.startScheduling();
        }, 500);
      }
    }, 1000);
  }

}