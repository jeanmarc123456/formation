import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() state : string;
  @HostBinding("class") nomClass: string;

  constructor() { }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.state);
  }


  private formatClass(state: string): string {
    return `state-${state.replace(/\s/g, '').toLowerCase()}`;
  }


}
