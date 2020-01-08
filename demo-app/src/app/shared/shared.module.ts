import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { ArchivePipe } from './pipes/archive.pipe';


@NgModule({
  declarations: [ToolHeaderComponent, MyUppercasePipe, MyAppendPipe, ArchivePipe],
  imports: [
    CommonModule
  ],
  exports: [ToolHeaderComponent, MyUppercasePipe, MyAppendPipe, ArchivePipe],
})
export class SharedModule { }
