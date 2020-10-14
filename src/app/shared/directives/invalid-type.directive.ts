import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { InvalidMessageDirective } from './invalid-message.directive';

@Directive({
  selector: '[invalidType]'
})
export class InvalidTypeDirective {

  @Input() invalidType : string;
  constructor(
    private invalidMessage: InvalidMessageDirective,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }


  ngOnInit() {
    this.invalidMessage.controlValue$.subscribe(
      () => {
        this.setVisible();
      }
    )
  }
private setVisible() {
  if(this.invalidMessage.match(this.invalidType)) {
    this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
    this.viewContainer.clear();
  }
}

}
