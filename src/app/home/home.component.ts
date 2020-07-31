import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }
  onuser(data) {
    this.dataService.getRepoByUser(data.name).subscribe((data: any[]) => {
      this.products = data;
    })
  }

}
