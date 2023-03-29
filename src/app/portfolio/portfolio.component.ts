import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Portfolio Item 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://example.com/portfolio-item-1'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Portfoli',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://example.com/portfolio-item-2'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Portfolio Item 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://example.com/portfolio-item-3'
      },
      {
      image: 'https://via.placeholder.com/300x200',
      title: 'Portfolio Item 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://example.com/portfolio-item-4'
      }
      ];
}
