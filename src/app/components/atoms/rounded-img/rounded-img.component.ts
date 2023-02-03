import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rounded-img',
  templateUrl: './rounded-img.component.html',
  styleUrls: ['./rounded-img.component.scss']
})
export class RoundedImgComponent {
  @Input() imgSrc?:string;
}
