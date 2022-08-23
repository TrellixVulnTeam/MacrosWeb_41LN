import { NgModule } from '@angular/core';
import { FilterProjectPipe } from './filter-project.pipe';
import { FilterPipe } from './filter.pipe';
import { HeaderNamePipe } from './header-name.pipe';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    FilterPipe,
    HeaderNamePipe,
    SafePipe,
    FilterProjectPipe
  ],
  imports: [

  ],
  exports: [
    FilterPipe,
    HeaderNamePipe,
    SafePipe,
    FilterProjectPipe
  ]
})
export class PipeModule { }
