import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'PHOTOS';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.dropbox.com/s/6ollksmnhgspdm9/IMG_0764.jpeg?raw=1';
  image3 = 'https://www.dropbox.com/s/6vjm29fcjdun8cc/IMG_6366.JPG?raw=1';

  constructor() { }

  ngOnInit() {
  }

}