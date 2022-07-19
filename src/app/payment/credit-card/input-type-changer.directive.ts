import { Directive, ElementRef, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInputTypeChanger]'
})
export class InputTypeChangerDirective {
  @HostListener('input', ['$event']) public onInput($event: Event) {
    console.log($event);
    console.dir(this.inputElement)
  }
  @HostListener('focus', ['$event']) public onFocus($event: Event) {
    console.log($event);
    console.dir(this.inputElement)
    if (this.inputElement.type !== 'password') {
      this.inputElement.type = 'password';
    }
  }

  private inputElement!: HTMLInputElement;

  public constructor(private el: ElementRef) {
    this.inputElement = el.nativeElement;
  }

}
