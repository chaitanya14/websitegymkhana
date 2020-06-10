import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
// import * as $1 from 'lightslider';
// declare var $: any;

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css',
    './lightslider.css']
})
export class PlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //   $(document).ready(function () {
    //     $('#autoWidth').lightSlider({
    //       autoWidth: true,
    //       loop: true,
    //       onSliderLoad: function () {
    //         $('#autoWidth').removeClass('cS-hidden');
    //       }
    //     });
    //   });
    // }

  }
}
