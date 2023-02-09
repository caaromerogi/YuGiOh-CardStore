import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h6-title',
  templateUrl: './h6-title.component.html',
  styleUrls: ['./h6-title.component.scss']
})
export class H6TitleComponent {
  @Input() text?:string;
  @Input() inputClass?: string;
}
