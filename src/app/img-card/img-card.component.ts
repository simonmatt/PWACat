import { Component, OnInit } from '@angular/core';

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says',
    fontsize: 40
  };
  public src: string;
  disabled = false;
  constructor() { }

  ngOnInit() {
    if (navigator.onLine) {
      this.generateSrc();
    }else{
      this.disabled=true;
      this.src='assets/offline.jpg'
    }
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message +
      '?size=' + this.image.fontsize +
      '&ts=' + Date.now();
  }
}
