import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos/Images';
  image1 = 'https://www.dropbox.com/s/rbz68dbkx4l1ai4/IMG_4673.jpeg?raw=1';
  image2 = 'https://www.dropbox.com/s/6ollksmnhgspdm9/IMG_0764.jpeg?raw=1';
  image3 = 'https://www.dropbox.com/s/6vjm29fcjdun8cc/IMG_6366.JPG?raw=1';

  constructor() { }

  ngOnInit() {
  }

}