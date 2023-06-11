import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  movieList: Array<any> = [];
  constructor() {
    let movie1 = {
      title : "Game of Thrones",
      description: "A song of fire and ice",
      year: "2014",
      director: "Popescu"
    };
    this.movieList.push(movie1);
    let movie2 = {
      title : "Happy",
      description: "Good",
      year: "2015",
      director: "Ionela"
    };
    this.movieList.push(movie2);//push = add in java
    console.log(this.movieList)
  }

  refreshList() : void{
    alert("S-a produs o schimbare in moviepreview!");
  }
}
