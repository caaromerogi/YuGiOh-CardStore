import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-img',
  templateUrl: './logo-img.component.html',
  styleUrls: ['./logo-img.component.scss']
})
export class LogoImgComponent {
  @Input() imgSrc?:string;
  @Input() inputStyle?:string;
}
