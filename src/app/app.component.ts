import { trigger, transition, group, query, useAnimation, animate, style } from '@angular/animations';
import { Component, HostBinding, HostListener } from '@angular/core';

export const mockSkeletonAnimation = trigger('skeletonAnimation', [
  transition(
    `start => end`,
    [
      query('x-skeleton', [
        animate('1000ms 200ms'),
        style({
          backgroundPosition: 'calc(100% + 180px)',
        }),
      ], { optional: true }),
])
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [mockSkeletonAnimation]
})
export class AppComponent {
  @HostBinding('@skeletonAnimation') public state = 'start';

  @HostListener('@skeletonAnimation.done') public changeAnimationState(): void {
    this.state =
      this.state === 'end'
        ? 'start'
        : 'end';
  }
  title = 'myApp';
}
