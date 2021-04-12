import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SplitPipe } from './pipes/split.pipe';


@NgModule({
  imports: [CommonModule, FormsModule,ReactiveFormsModule,
    InfiniteScrollModule],
  exports: [
    SplitPipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  declarations: [SplitPipe],
  providers: [],
})
export class SharedModule {}
