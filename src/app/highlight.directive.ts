import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@HostListener('mouseenter') onMouseEnter(){
  this.highlight("yellow");
}

@HostListener('mouseleave') onMouseLeave(){
  this.highlight("");
  
}

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor ="#F1F1F1";
   }

   private highlight(color: string){
    this.el.nativeElement.style.backgroundColor =color;

   }

}
