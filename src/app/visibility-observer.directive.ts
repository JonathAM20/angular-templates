import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appVisibilityObserver]',
  standalone: true
})
export class VisibilityObserverDirective implements OnInit, OnDestroy {

  constructor(private element: ElementRef) { }

  @Output()
  appVisibilityObserver = new EventEmitter<boolean>();

  @Input() threshold: number = 0.1;

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    if (!('IntersectionObserver' in window)) {
      console.warn('Intersection Observer não é suportado por este navegador.');
      return;
    }
    this.setupObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.unobserve(this.element.nativeElement);
    }
  }

  private setupObserver(): void {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: this.threshold,
    };

    this.observer = new IntersectionObserver(this.callback, options);

    this.observer.observe(this.element.nativeElement);
  }

  private callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      this.appVisibilityObserver.emit(entry.isIntersecting);
      this.observer.unobserve(this.element.nativeElement);
    });
  };
}