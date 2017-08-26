import { Component, ElementRef, Input, OnChanges, Renderer, SimpleChange, SimpleChanges } from '@angular/core';
import { Config, Ion } from 'ionic-angular';

@Component({
  selector: 'fa-icon',
  template: '',
})
export class FaIconComponent extends Ion implements OnChanges {
  @Input() public name: string;
  @Input() public size: string;

  @Input('fixed-width')
  set fixedWidth(fixedWidth: string) {
    this.setElementClass('fa-fw', this.isTrueProperty(fixedWidth));
  }

  constructor(config: Config, elementRef: ElementRef, renderer: Renderer) {
    super(config, elementRef, renderer, 'fa');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.name) {
      this.unsetPrevAndSetCurrentClass(changes.name);
    }
    if (changes.size) {
      this.unsetPrevAndSetCurrentClass(changes.size);
    }
  }

  public isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
      val = val.toLowerCase().trim();
      return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
  }

  public unsetPrevAndSetCurrentClass(change: SimpleChange) {
    this.setElementClass('fa-' + change.previousValue, false);
    this.setElementClass('fa-' + change.currentValue, true);
  }
}

// https://charlouze.github.io/ionic/2017/05/31/Ionic-3-and-Font-Awesome.html
