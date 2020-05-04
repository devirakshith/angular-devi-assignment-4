import { trigger, style, transition, animate, query, stagger } from '@angular/animations';


export const animateFunction =
trigger('listAnimation', [
  transition('* => *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('0.5s', animate('600ms ease-in', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave', [ stagger('-0.5s', animate('600ms .1s ease-out', style({ opacity: 0.2, transform: 'translateX(100%)' })))],
      { optional: true })
    ])
]);

