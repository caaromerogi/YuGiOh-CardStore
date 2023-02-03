import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-input-text',
  templateUrl: './icon-input-text.component.html',
  styleUrls: ['./icon-input-text.component.scss']
})
export class IconInputTextComponent {
  @Input() inputClass?:string;
  @Input() inputPlaceholder?:string;
}
