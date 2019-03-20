import { Directive, TemplateRef, ViewContainerRef, Input, HostListener, HostBinding } from "@angular/core";


@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective{


  @HostBinding("class.open") isOpen = false;
  @HostListener("click") toggleOpen(event: Event){
    this.isOpen = !this.isOpen;
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){

  }
}