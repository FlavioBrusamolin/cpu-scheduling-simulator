import { Injectable } from '@angular/core';

@Injectable()
export class ProcessService {

    process: any;
    newProcesses: any[] = [];
    runningProcess: any;
    waitingProcesses: any[] = [];
    allProcesses: any[] = [];
    burst: number;
    pid: number = 0;

    constructor() { }

    newProcess() {
        this.burst = this.generateRandomNumber(1, 6);
        this.process = { pid: this.pid++, burst: this.burst, state: 'New' };
        this.newProcesses.push(this.process);
        this.allProcesses.push(this.process);
        return this.newProcesses;
    }

    generateRandomNumber(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    cpuProcess() {
        if (this.allProcesses.length > 0) {
            this.runningProcess = this.allProcesses.shift();
            if (this.runningProcess.state == 'New')
                this.newProcesses.shift();
            else
                this.waitingProcesses.shift();
            this.runningProcess.state = 'Running';
            return this.runningProcess;
        }
        else
            console.log('Não há processos para serem executados');
    }

    addWaitingProcess(waitingProcess: any) {
        waitingProcess.state = 'Waiting';
        this.waitingProcesses.push(waitingProcess);
        this.allProcesses.push(waitingProcess);
    }

    listWaitingProcesses() {
        return this.waitingProcesses;
    }

    listAllProcesses() {
        return this.allProcesses;
    }

    destroy() {
        this.newProcesses = [];
        this.runningProcess = [];
        this.waitingProcesses = [];
        this.allProcesses = [];
        this.pid = null;
        this.process = null;
        this.burst = null;
    }

}