import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-item',
  templateUrl: './a-item.component.html',
  styleUrls: ['./a-item.component.scss']
})
export class AItemComponent {
  constructor(private router:Router){}
  @Input() link?:string;
  @Input() text?:string;
}
