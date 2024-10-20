import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appAutoSelect]',
  standalone: true
})
export class AutoSelectDirective {

    @HostListener('focus', ['$event.target'])
    onFocus(target: HTMLElement) {
        target.focus();
    }

}
