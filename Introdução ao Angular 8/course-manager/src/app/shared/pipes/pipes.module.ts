import { NgModule } from '@angular/core';
import { DataBrPipe } from './data-br.pipe';
import { ReplacePipe } from './replace.pipe';

@NgModule({
  declarations: [DataBrPipe,ReplacePipe],
  exports: [DataBrPipe,ReplacePipe]
})
export class PipesModule { }
