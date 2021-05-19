import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VoteComponent } from './component/vote/vote.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    SharedModule,
    VoteRoutingModule
  ]
})
export class VoteModule { }
