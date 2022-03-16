import {
  AfterViewInit,
  ContentChildren,
  Directive,
  QueryList,
} from '@angular/core';
import { Tippy } from 'tippy.js';
import { createSingleton } from 'tippy.js';
import { TooltipDirective } from './tooltip.directive';

@Directive({
  selector: '[appToolTipSingleton]',
})
export class ToolTipSingletonDirective implements AfterViewInit {
  @ContentChildren(TooltipDirective, { descendants: true })
  elementsWithTooltips!: QueryList<TooltipDirective>;

  constructor() {}

  ngAfterViewInit() {
  createSingleton(this.getTippyInstances(), {
    delay: [200, 0],
    moveTransition: 'transform 0.2s ease-out'
  });    
  }


  getTippyInstances(){
  return this.elementsWithTooltips.toArray()
  .map((t) => {
    return t.tippyInstance;
  })
}

}
