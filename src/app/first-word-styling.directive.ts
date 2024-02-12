import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFirstWordStyling]',
  standalone: true
})
export class FirstWordStylingDirective implements OnInit {
  constructor(private el: ElementRef) { }
  ngOnInit()
{
  const textContent = this.el.nativeElement.textContent.trim().replace(/[^\w\s]/gi, '');
  const firstWord = textContent.split(/\s+/)[0].toLowerCase();
  switch(firstWord){
    case 'info':
      this.el.nativeElement.style.backgroundColor ='#cce5ff';
      this.el.nativeElement.style.color = '#004085';
      break;
    case 'warnung':
      this.el.nativeElement.style.backgroundColor ='#856404';
      this.el.nativeElement.style.color = '#fff3cd';
      break;
    case 'fehler':
      this.el.nativeElement.style.backgroundColor ='#721c24';
      this.el.nativeElement.style.color = 'red';
      break;
    default:
      this.el.nativeElement.style.backgroundColor ='black';
      this.el.nativeElement.style.color = 'white';
      break;
  }


}

}
