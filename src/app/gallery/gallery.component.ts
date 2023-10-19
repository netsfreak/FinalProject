import { Component } from '@angular/core';

 

@Component({

  selector: 'app-gallery',

  templateUrl: './gallery.component.html',

  styleUrls: ['./gallery.component.css']

})

export class GalleryComponent {

  appList: any[] = [{

    "ID": "1",

    "url": './assets/images/one.png'

  },

  {

     "ID": "2",

     "url": './assets/images/two.png'

  },

  {

    "ID": "3",

    "url": './assets/images/two.png'

 },

 {

  "ID": "4",

  "url": './assets/images/one.png'

}];

}
