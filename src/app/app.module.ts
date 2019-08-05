import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { ProcessComponent } from './process/process.component';

import { FcfsComponent } from './fcfs/fcfs.component';
import { MemoryComponent } from './memory/memory.component';
import { CpuComponent } from './fcfs/cpu-fcfs/cpu-fcfs.component';
import { TerminatedComponent } from './terminated/terminated.component'

import { RoundRobinComponent } from './round-robin/round-robin.component';
import { CpuRRComponent } from './round-robin/cpu-rr/cpu-rr.component';
import { WaitComponent } from './round-robin/wait/wait.component';

import { ProcessService } from './process/process.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FcfsComponent,
    RoundRobinComponent,
    ProcessComponent,
    MemoryComponent,
    CpuComponent,
    TerminatedComponent,
    CpuRRComponent,
    WaitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
