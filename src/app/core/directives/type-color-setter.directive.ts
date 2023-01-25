import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appTypeColorSetter]'
})
export class TypeColorSetterDirective {

  @Input('appTypeColorSetter') appColor!: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appColor;
  }

}
