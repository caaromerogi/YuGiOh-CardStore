import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tooltip',
  templateUrl: './card-tooltip.component.html',
  styleUrls: ['./card-tooltip.component.scss']
})
export class CardTooltipComponent {
  @Input() imgSrc?:string = "https://images.ygoprodeck.com/images/cards_small/86578200.jpg";
  @Input() cardTitle?:string;
  @Input() cardType?:string;
  @Input() description?:string;
  @Input() hasAttack?:boolean;
  @Input() atk?:string;
  @Input() dfs?:string;
}
