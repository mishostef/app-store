import { Directive, Input ,ElementRef,Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit{

  @Input() defaultColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.defaultColor) {
      this.setBgColor(this.defaultColor);
    } else {
      this.setBgColor('white');
    }
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    );
  }

}
