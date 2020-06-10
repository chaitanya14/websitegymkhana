import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngimageslider',
  templateUrl: './ngimageslider.component.html',
  styleUrls: ['./ngimageslider.component.css']
})
export class NgimagesliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'Angular';
  imageObject = [{
    image: '../../assets/images/sachin.jpg',
    thumbImage: '../../assets/images/sachin.jpg',
    title: 'Sachin All Rounder'
  }, {
    image: '../../assets/images/kohli.jpg',
    thumbImage: '../../assets/images/kohli.jpg',
    title: 'kohli All Rounder'
  }, {
    image: '../../assets/images/hp.jpg',
    thumbImage: '../../assets/images/hp.jpg',
    title: 'Sachin All Rounder'
  }, {
    image: '../../assets/images/karanprofile.jpg',
    thumbImage: '../../assets/images/karanprofile.jpg',
    title: 'KARAN All Rounder'
  }, {
    image: '../../assets/images/karanpersonal1.jpg',
    thumbImage: '../../assets/images/karanpersonal1.jpg',
    title: 'KARAN All Rounder'
  }, {
    image: '../../assets/images/Bheem.jpg',
    thumbImage: '../../assets/images/Bheem.jpg',
    title: 'BHEEM All Rounder'
  }, {
    image: '../../assets/images/rajeev.jpg',
    thumbImage: '../../assets/images/rajeev.jpg',
    title: 'RAJEEV RightHand Batsman'
  }
  ];
}
