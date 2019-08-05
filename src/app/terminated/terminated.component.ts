import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sch-terminated',
  templateUrl: './terminated.component.html',
  styleUrls: ['./terminated.component.css']
})
export class TerminatedComponent implements OnInit {

  terminatedProcesses: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  finishScheduling(terminatedProcess: any) {
    terminatedProcess.state = 'Terminated';
    this.terminatedProcesses.push(terminatedProcess);
  }

}
