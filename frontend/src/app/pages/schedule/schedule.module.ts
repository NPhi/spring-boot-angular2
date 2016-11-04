import { NgModule }           from '@angular/core';
import { ScheduleComponent }   from './schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
    imports : [ ScheduleRoutingModule ],
  declarations: [ ScheduleComponent ],
  exports:      [ ScheduleComponent ]
})
export class ScheduleModule { }