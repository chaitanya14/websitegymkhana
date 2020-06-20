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
    image: '../../assets/images/karanpersonal1.jpg',
    thumbImage: '../../assets/images/karanpersonal1.jpg',
    title: 'KARAN All-Rounder'
  }, {
    image: '../../assets/images/Bheem.jpg',
    thumbImage: '../../assets/images/Bheem.jpg',
    title: 'BHEEM All-Rounder'
  }, {
    image: '../../assets/images/rajeev.jpg',
    thumbImage: '../../assets/images/rajeev.jpg',
    title: 'RAJEEV Right-Hand Batsman'
  }, {
    image: '../../assets/images/Sushanth.jpg',
    thumbImage: '../../assets/images/Sushanth.jpg',
    title: 'SUSHANTH All-Rounder'
  }, {
    image: '../../assets/images/prasanna.jpg',
    thumbImage: '../../assets/images/prasanna.jpg',
    title: 'PRASANNA All-Rounder'
  }, {
    image: '../../assets/images/vivek.jpg',
    thumbImage: '../../assets/images/vivek.jpg',
    title: 'VIVEK All-Rounder'
  }, {
    image: '../../assets/images/namish.jpg',
    thumbImage: '../../assets/images/namish.jpg',
    title: 'NAMISH All-Rounder'
  }

  ];
}
