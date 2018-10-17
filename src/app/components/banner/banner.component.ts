import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images = [1, 2, 3,4,5,6,7,8,9,10].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }
  ngOnInit() {  }
}
