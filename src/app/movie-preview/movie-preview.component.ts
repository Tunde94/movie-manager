import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent {
  @Input() movie: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  constructor(private movieService: MovieService) {
  }
  public onDelete(): void {
    //alert("S-a apasat delete!");

    this.movieService.deleteMovie(this.movie.id!).then((response: any) => {
      console.log(response);
      alert(response.message);
      this.onChange.emit();
    })
  }

}
