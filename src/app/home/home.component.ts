import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;

  users: Object;

  numPages: number;

  pages: number[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.showPage(1);
  }

  firstClick() {
    console.log("clicked");
    this.h1Style = !this.h1Style;
    this.data.firstClick();
  }

  showPage(page: number) {
    this.data.getUsersByPage(page).subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  createPagesArray(total_pages: number) {
    var pagesArray = [];
    for (let i: number = 1; i <= total_pages; i++) {
      pagesArray[i] = i;
    }
    return pagesArray;
  }

}
