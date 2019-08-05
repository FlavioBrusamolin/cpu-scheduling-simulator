import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProcessService } from '../../process/process.service';

@Component({
  selector: 'sch-cpu-rr',
  templateUrl: './cpu-rr.component.html',
  styleUrls: ['./cpu-rr.component.css']
})
export class CpuRRComponent implements OnInit {

  runningProcess: any;
  allProcess: any[] = [];
  quantum: number = 2;
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
      this.executeProcess(this.runningProcess.burst - 1, this.quantum);
    else {
      this.timeout = setTimeout(() => {
        this.startScheduling();
      }, 2000);
    }
  }

  executeProcess(i: number, quantum: number) {
    this.timeout = setTimeout(() => {
      this.allProcess = this.processService.listAllProcesses();
      this.runningProcess.burst = i;
      i--;
      quantum--;
      if (i < 0) {
        this.finishProcess.emit(this.runningProcess);
        this.runningProcess = null;
        this.timeout = setTimeout(() => {
          this.startScheduling();
        }, 500);
      }
      else if (quantum > 0) {
        this.executeProcess(i, quantum);
      }
      else if (this.allProcess.length == 0) {
        this.executeProcess(i, 2);
      }
      else {
        this.processService.addWaitingProcess(this.runningProcess);
        this.runningProcess = null;
        this.timeout = setTimeout(() => {
          this.startScheduling();
        }, 500);
      }
    }, 1000);
  }

}
