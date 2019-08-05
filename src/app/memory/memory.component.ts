import { Component, OnInit } from '@angular/core';

import { ProcessService } from '../process/process.service';

@Component({
  selector: 'sch-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  newProcesses: any[] = [];

  constructor(private processService: ProcessService) { }

  ngOnInit() {
  }

  newProcess() {
    this.newProcesses = this.processService.newProcess();
  }

}
