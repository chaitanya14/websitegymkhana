import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-newnav',
  templateUrl: './newnav.component.html',
  styleUrls: ['./newnav.component.css']
})
export class NewnavComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  //  document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList
  //   .toggle('show'));

  ngOnInit(): void {
    // this.route.paramMap.subscribe()
  }

}
